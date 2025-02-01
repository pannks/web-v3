---
title: "useFetch.ts"
date: "2020-07-01"
filename: "useFetch.ts"
lang: "javascript"
hash: "use-fetch"

---

import { FetchError } from "./../data/types";
import { useState, useCallback } from "react";

interface FetchOptions extends RequestInit {
    body?: any;
}

export interface UseFetchReturn<T> {
    data: T | null;
    setData: React.Dispatch<React.SetStateAction<T | null>>;
    loading: boolean;
    error: FetchError | null;
    setError: React.Dispatch<React.SetStateAction<FetchError | null>>;
    execute: (options?: FetchOptions) => Promise<void>;
}

const useFetch = <T = unknown>(
    initialUrl: string,
    initialOptions: FetchOptions = {}
): UseFetchReturn<T> => {
    const [url, setUrl] = useState<string>(initialUrl);
    const [options, setOptions] = useState<FetchOptions>(initialOptions);
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<FetchError | null>(null);

    const execute = useCallback(
        async (overrideOptions?: FetchOptions) => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url, {
                    ...options,
                    ...overrideOptions
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(
                        JSON.stringify(
                            {
                                status: response.status,
                                name: response.statusText,
                                message: errorText
                            },
                            null,
                            2
                        )
                    );
                }

                const responseData: T = await response.json();
                setData(responseData);
            } catch (err) {
                const errJson = JSON.parse(err?.message || "{}");
                console.log(errJson);
                setError({
                    status: errJson?.status || 500,
                    name: errJson?.name || "Error",
                    message: `${errJson?.message || "Unknown error"}`
                });
            } finally {
                setLoading(false);
            }
        },
        [url, options]
    );

    return { data, setData, loading, error, setError, execute };
};

export default useFetch;
