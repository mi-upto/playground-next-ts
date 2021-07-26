import { useState, useCallback, useEffect } from 'react';

type UseCounterParameter = number;

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
  const [text, setText] = useState('ほげ');

  useEffect(() => {
    count === 10 ? setText('うんこ') : setText('ほげ')
  }, [count]);

  return {
    count,
    text,
    ...dispatches,
  };
};
