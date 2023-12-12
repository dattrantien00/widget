"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouteExecution = void 0;
const sdk_1 = require("@lifi/sdk");
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const shallow_1 = require("zustand/shallow");
const stores_1 = require("../stores");
const events_1 = require("../types/events");
const useAccount_1 = require("./useAccount");
const useWidgetEvents_1 = require("./useWidgetEvents");
const useRouteExecution = ({ routeId, executeInBackground, onAcceptExchangeRateUpdate, }) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    const { account } = (0, useAccount_1.useAccount)();
    const resumedAfterMount = (0, react_1.useRef)(false);
    const emitter = (0, useWidgetEvents_1.useWidgetEvents)();
    const routeExecutionStoreContext = (0, stores_1.useRouteExecutionStoreContext)();
    const routeExecution = (0, stores_1.useRouteExecutionStore)((state) => state.routes[routeId]);
    const [updateRoute, restartRoute, deleteRoute] = (0, stores_1.useRouteExecutionStore)((state) => [state.updateRoute, state.restartRoute, state.deleteRoute], shallow_1.shallow);
    const updateRouteHook = (updatedRoute) => {
        const routeExecution = routeExecutionStoreContext.getState().routes[updatedRoute.id];
        if (!routeExecution) {
            return;
        }
        const clonedUpdatedRoute = structuredClone(updatedRoute);
        updateRoute(clonedUpdatedRoute);
        const process = (0, stores_1.getUpdatedProcess)(routeExecution.route, clonedUpdatedRoute);
        if (process) {
            emitter.emit(events_1.WidgetEvent.RouteExecutionUpdated, {
                route: clonedUpdatedRoute,
                process,
            });
        }
        if ((0, stores_1.isRouteDone)(clonedUpdatedRoute)) {
            emitter.emit(events_1.WidgetEvent.RouteExecutionCompleted, clonedUpdatedRoute);
        }
        if ((0, stores_1.isRouteFailed)(clonedUpdatedRoute) && process) {
            emitter.emit(events_1.WidgetEvent.RouteExecutionFailed, {
                route: clonedUpdatedRoute,
                process,
            });
        }
        console.log('Route updated.', clonedUpdatedRoute);
    };
    const acceptExchangeRateUpdateHook = async (params) => {
        if (!onAcceptExchangeRateUpdate) {
            return false;
        }
        const accepted = await new Promise((resolve) => onAcceptExchangeRateUpdate(resolve, params));
        return accepted;
    };
    const executeRouteMutation = (0, react_query_1.useMutation)({
        mutationFn: () => {
            if (!account.isConnected) {
                throw Error('Account is not connected.');
            }
            if (!routeExecution?.route) {
                throw Error('Execution route not found.');
            }
            queryClient.removeQueries({ queryKey: ['routes'], exact: false });
            return (0, sdk_1.executeRoute)(routeExecution.route, {
                updateRouteHook,
                acceptExchangeRateUpdateHook,
                infiniteApproval: false,
                executeInBackground,
            });
        },
        onMutate: () => {
            console.log('Execution started.', routeId);
            if (routeExecution) {
                emitter.emit(events_1.WidgetEvent.RouteExecutionStarted, routeExecution.route);
            }
        },
    });
    const resumeRouteMutation = (0, react_query_1.useMutation)({
        mutationFn: (resumedRoute) => {
            if (!account.isConnected) {
                throw Error('Account is not connected.');
            }
            if (!routeExecution?.route) {
                throw Error('Execution route not found.');
            }
            return (0, sdk_1.resumeRoute)(resumedRoute ?? routeExecution.route, {
                updateRouteHook,
                acceptExchangeRateUpdateHook,
                infiniteApproval: false,
                executeInBackground,
            });
        },
        onMutate: () => {
            console.log('Resumed to execution.', routeId);
        },
    });
    const _executeRoute = (0, react_1.useCallback)(() => {
        executeRouteMutation.mutateAsync(undefined, {
            onError: (error) => {
                console.warn('Execution failed!', routeId, error);
            },
            onSuccess: (route) => {
                console.log('Executed successfully!', route);
            },
        });
    }, [executeRouteMutation, routeId]);
    const _resumeRoute = (0, react_1.useCallback)((route) => {
        resumeRouteMutation.mutateAsync(route, {
            onError: (error) => {
                console.warn('Resumed execution failed.', routeId, error);
            },
            onSuccess: (route) => {
                console.log('Resumed execution successful.', route);
            },
        });
    }, [resumeRouteMutation, routeId]);
    const restartRouteMutation = (0, react_1.useCallback)(() => {
        restartRoute(routeId);
        _resumeRoute(routeExecution?.route);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_resumeRoute, routeExecution?.route, routeId]);
    const deleteRouteMutation = (0, react_1.useCallback)(() => {
        deleteRoute(routeId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [routeId]);
    // Resume route execution after page reload
    (0, react_1.useEffect)(() => {
        // Check if route is eligible for automatic resuming
        if ((0, stores_1.isRouteActive)(routeExecution?.route) &&
            account.isConnected &&
            !resumedAfterMount.current) {
            resumedAfterMount.current = true;
            _resumeRoute();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account.isConnected]);
    (0, react_1.useEffect)(() => {
        return () => {
            const route = routeExecutionStoreContext.getState().routes[routeId]?.route;
            if (!route || !(0, stores_1.isRouteActive)(route)) {
                return;
            }
            (0, sdk_1.updateRouteExecution)(route, { executeInBackground: true });
            console.log('Move route execution to background.', routeId);
            resumedAfterMount.current = false;
        };
    }, [routeExecutionStoreContext, routeId]);
    return {
        executeRoute: _executeRoute,
        restartRoute: restartRouteMutation,
        deleteRoute: deleteRouteMutation,
        route: routeExecution?.route,
        status: routeExecution?.status,
    };
};
exports.useRouteExecution = useRouteExecution;
