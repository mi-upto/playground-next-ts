import { useState, useCallback, useEffect } from 'react';

type UseCounterParameter = number | undefined;

export const useCounter = (props: UseCounterParameter = 0) => {
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

export const useCounterWithAlert = (props: UseCounterParameter) => {
  const { count, ...dispatches } = useCounter(props);

  useEffect(() => {
    if (count === 10) {
      alert('ten!!');
    }
  }, [count]);

  return {
    count,
    ...dispatches,
  };
};
