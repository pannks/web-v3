---
title: "useEncodeLocalStorage.ts"
date: "2020-07-01"
filename: "useEncodeLocalStorage.ts"
description: "Please provide your own decodeBase64Unicode, encodeBase64Unicode"
lang: "tsx"
hash: "use-encode-localstorage"

---
import { decodeBase64Unicode, encodeBase64Unicode } from "@/lib/utils";
import { useState, useEffect } from "react";

/**
 * A custom hook that syncs a state value to localStorage,
 * **Base64-encoding** the JSON string in a Unicode-safe manner.
 *
 * @param key The key to store in localStorage
 * @param initialValue The default value if none is in localStorage
 * @returns [value, setValue]
 */
export function useEncodeLocalStorage<T>(
    key: string,
    initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            if (item) {
                // Decode base64 safely and parse JSON
                const decoded = decodeBase64Unicode(item);
                return JSON.parse(decoded) as T;
            }
        } catch (error) {
            console.error(
                "useEncodeLocalStorage: Error loading from localStorage",
                error
            );
        }
        return initialValue;
    });

    useEffect(() => {
        try {
            const json = JSON.stringify(storedValue);
            const encoded = encodeBase64Unicode(json);
            localStorage.setItem(key, encoded);
        } catch (error) {
            console.error(
                "useEncodeLocalStorage: Error saving to localStorage",
                error
            );
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}
