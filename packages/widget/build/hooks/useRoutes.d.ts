import type { Route, RoutesResponse } from '@lifi/sdk';
interface RoutesProps {
    insurableRoute?: Route;
}
export declare const useRoutes: ({ insurableRoute }?: RoutesProps) => {
    routes: Route[] | undefined;
    isLoading: boolean;
    isFetching: boolean;
    isFetched: boolean;
    dataUpdatedAt: number;
    refetchTime: number;
    refetch: (options?: import("@tanstack/query-core/build/legacy/queryClient-13f81fcb").Z | undefined) => Promise<import("@tanstack/query-core/build/legacy/queryClient-13f81fcb").ac<RoutesResponse, Error>>;
};
export {};
