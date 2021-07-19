import { LayoutDefault } from "@/components/layouts/default";
import type { NextPage } from 'next';
import { useCounter } from '@/hooks/count';

export const Home: NextPage = () => {
  const {count, increment, decrement} = useCounter(0)

  return (
    <LayoutDefault>
      <h1 className="my-10 text-gray-900 text-5xl font-bold tracking-tight">
        <span className="block">Hello World!</span>
        <span className="block pl-10 text-blue-800">Next.js TypeScript</span>
      </h1>

      <p>count: {count}</p>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>

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
