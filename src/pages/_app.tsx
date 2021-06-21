import '@/styles/globals.css'

import type { FC } from 'react';
import type { AppProps } from 'next/app';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};
export default App;
