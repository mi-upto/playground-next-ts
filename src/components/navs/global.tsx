import type { FC } from 'react';
import AppLink from '@/components/links/default';

export const GlobalNav: FC = () => {
  return (
    <nav className="container flex gap-3 m-auto">
      <AppLink href="/" className="!text-red-700">
        Home
      </AppLink>
      <AppLink href="/about" className="bg-blue-700 !text-white">
        about
      </AppLink>
      <AppLink href="/posts">posts</AppLink>
    </nav>
  );
};

export default GlobalNav;
