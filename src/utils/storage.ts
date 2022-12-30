export function getStorage<T>(key: string, defaultValue: T): T {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(key) as T;

    if (value) {
      return value;
    }
  }

  return defaultValue;
};

export const setStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value);
  }
};
