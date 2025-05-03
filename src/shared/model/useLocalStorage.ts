import { useState, useEffect } from 'react';

const STORAGE_KEY = 'okflav';

export function useLocalStorage() {
  const [handleName, setHandleName] = useState<string | null>(() => localStorage.getItem(STORAGE_KEY));

  function updateHandleName(name: string) {
    setHandleName(name);
    localStorage.setItem(STORAGE_KEY, name);
  }

  function removeHandleName() {
    setHandleName(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        setHandleName(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return { handleName, updateHandleName, removeHandleName };
}
