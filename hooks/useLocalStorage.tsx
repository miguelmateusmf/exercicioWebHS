import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initialState?: any) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) setState(parse(item));
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

const parse = (value: string) => {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};
