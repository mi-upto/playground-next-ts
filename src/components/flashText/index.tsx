import type { FC } from 'react';
import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  CSSProperties,
} from 'react';

type FlashTextProps = {
  color: string;
  interval: number;
  enabledFlash: boolean;
};

export const FlashText: FC<FlashTextProps> = ({
  children,
  color,
  interval,
  enabledFlash,
}) => {
  let [textColor, setTextColor] = useState(color);

  const flashText = useCallback(() => {
    const color = textColor === 'red' ? 'blue' : 'red';
    setTextColor(color)
  }, [textColor]);

  useEffect(() => {
    if (!enabledFlash) {
      return
    }
    const intervalId = setInterval(flashText, interval);
    return () => {
      clearInterval(intervalId);
    };
  }, [flashText, interval, enabledFlash]);

  const styles = useMemo<CSSProperties>(
    () => ({
      color: textColor,
    }),
    [textColor]
  );

  return <span style={styles}>{children}</span>;
};
export default FlashText;
