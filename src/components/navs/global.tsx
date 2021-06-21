import type { FC } from 'react';
import AppLink from '@/components/links/default';

export const GlobalNav: FC = () => {
  return (
    <nav className="container flex gap-3 m-auto">
      <AppLink href="/" active>
        Home
      </AppLink>
      <AppLink href="/about">
        about
      </AppLink>
      <AppLink href="/posts">
        posts
      </AppLink>
    </nav>
  );
};

export default GlobalNav;
