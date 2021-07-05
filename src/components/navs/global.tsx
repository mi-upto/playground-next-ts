import type { FC } from 'react';
import AppLink from '@/components/links/default';

export const GlobalNav: FC = () => {
  return (
    <nav className="container flex gap-3 m-auto relative right-2.5">
      <AppLink href="/" className="px-3">
        Home
      </AppLink>
      <AppLink href="/about" className="px-3">
        About
      </AppLink>
      <AppLink href="/posts" className="px-3">
        Posts
      </AppLink>
    </nav>
  );
};

export default GlobalNav;
