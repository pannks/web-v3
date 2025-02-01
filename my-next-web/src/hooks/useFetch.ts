// hooks/useFetch.ts
import { useState, useEffect, useCallback } from "react";

type UseFetchState<T> = {
    data: T | null;
    loading: boolean;
    error: Error | null;
};

type UseFetchReturn<T> = UseFetchState<T> & {
    refetch: (...args: any[]) => void;
};

/**
 * useFetch is a custom hook for fetching data asynchronously.
 * @param fetchFunction An asynchronous function that returns data of type T.
 * @param dependencies An array of dependencies that trigger the fetch when changed.
 * @returns An object containing data, loading, error, and a refetch function.
 */
function useFetch<T>(
    fetchFunction: (...args: any[]) => Promise<T>,
    dependencies: any[] = []
): UseFetchReturn<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const executeFetch = useCallback(
        async (...args: any[]) => {
            setLoading(true);
            setError(null);
            try {
                const result = await fetchFunction(...args);
                setData(result);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        },
        [fetchFunction]
    );

    useEffect(() => {
        executeFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    return { data, loading, error, refetch: executeFetch };
}

export default useFetch;
