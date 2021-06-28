import type { FC } from 'react';
import { useRouter } from 'next/router';
import AppLink from '@/components/links/default';

export const GlobalNav: FC = () => {
  const router = useRouter()
  console.log('router', router.asPath)

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
