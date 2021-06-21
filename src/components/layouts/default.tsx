import type { FC } from 'react';
import Head from 'next/head';
import GlobalNav from '@/components/navs/global';

export type LayoutDefaultProps = {
  title?: string;
};

export const LayoutDefault: FC<LayoutDefaultProps> = ({
  children,
  title = 'This is the default title',
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header className="bg-gray-200 mb-4">
        <GlobalNav />
      </header>

      <main className="container m-auto">{children}</main>

      <footer className="fixed bottom-0 w-full bg-black">
        <small className="text-white text-center block">
          This is footer. sample.
        </small>
      </footer>
    </div>
  );
};

LayoutDefault.displayName = 'LayoutDefault';
