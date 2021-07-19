import { useState, useCallback } from 'react';

export const useCounter = (props = 0) => {
  const [count, setCount] = useState(props);

  const increment = useCallback(() => {
    setCount((prev) => ++prev);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => --prev);
  }, []);

  return {
    count,
    increment,
    decrement,
  };
};
