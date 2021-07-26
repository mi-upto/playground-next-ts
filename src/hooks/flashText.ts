import { useState } from 'react';

export const useFlashText = (props: boolean) => {
  const [enabledFlash, setEnabledFlash] = useState(props);

  // TODO: Use useCallback
  const stopFlash = () => setEnabledFlash(false);
  const startFlash = () => setEnabledFlash(true);

  return {
    enabledFlash,
    stopFlash,
    startFlash,
  };
};
