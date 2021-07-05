import { LayoutDefault } from "@/components/layouts/default";
import type { NextPage } from 'next';

// @see https://nextjs.org/docs/advanced-features/custom-error-page
export const NotFound: NextPage = () => {
  return (
    <LayoutDefault>
      <h1>404 Not Found</h1>
    </LayoutDefault>
  );
};

export default NotFound;
