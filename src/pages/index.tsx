import { LayoutDefault } from "@/components/layouts/default";
import type { NextPage } from 'next';

export const Home: NextPage = () => {
  return (
    <LayoutDefault>
      <h1 className="text-5xl tracking-tight font-bold text-gray-900 my-10">
        <span className="block">Hello World!</span>
        <span className="block text-blue-800 pl-10">Next.js TypeScript</span>
      </h1>

      <div className="my-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </LayoutDefault>
  );
}

export default Home;
