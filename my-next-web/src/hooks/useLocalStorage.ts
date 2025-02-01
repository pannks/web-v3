import { Encryption } from "@/utils/encrypt";
import { useState, useEffect } from "react";

function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
    const encryption = Encryption.getInstance(); // Get the encryption instance

    const readValue = (): T => {
        if (typeof window === "undefined") {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                // Decrypt the stored data
                const decryptedData = encryption.decrypt(item);
                return decryptedData ? decryptedData : initialValue;
            } else {
                return initialValue;
            }
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState<T>(readValue);

    useEffect(() => {
        try {
            const valueToStore =
                storedValue instanceof Function
                    ? storedValue(storedValue)
                    : storedValue;

            // Encrypt the value before storing it
            const encryptedData = encryption.encrypt(valueToStore);

            window.localStorage.setItem(key, encryptedData);
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default useLocalStorage;
