import { LayoutDefault } from '@/components/layouts/default';
import type { NextPage } from 'next';
import AppLink from '@/components/links/default';

export const Posts: NextPage = () => {
  return (
    <LayoutDefault title="First Post">
      <h1>First Post</h1>
      <AppLink href="/">トップページ</AppLink>
    </LayoutDefault>
  );
};

export default Posts;
