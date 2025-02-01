---
title: Classic useLocalStorage
date: "2020-07-01"
filename: "useLocalStorage.js"
lang: "javascript"
hash: "useLocalStorage"

---

import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const isClient = typeof window === 'object';

  const [storedValue, setStoredValue] = useState(() => {
    if (!isClient) return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (!isClient) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue, isClient]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
