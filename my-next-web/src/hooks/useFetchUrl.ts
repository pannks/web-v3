// src/hooks/useFetch.js
import { useState, useEffect } from "react";

function useFetchUrl(url: RequestInfo | URL, options = {}, dependencies = []) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true; // To prevent state updates if component is unmounted
        setIsLoading(true);
        fetch(url, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                return response.json();
            })
            .then((json) => {
                if (isMounted) {
                    setData(json);
                    setError(null);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    setError(err);
                    setData(null);
                }
            })
            .finally(() => {
                if (isMounted) setIsLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, dependencies); // Re-run when dependencies change

    return { data, error, isLoading };
}

export default useFetchUrl;
