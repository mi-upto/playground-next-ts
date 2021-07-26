import { LayoutDefault } from '@/components/layouts/default';
import { NextPage } from 'next';
import FlashText from '@/components/flashText';
import { useFlashText } from '@/hooks/flashText';

export const Home: NextPage = () => {
  const { enabledFlash, startFlash, stopFlash } = useFlashText(true);

  return (
    <LayoutDefault>
      <h1 className="my-10 text-gray-900 text-5xl font-bold tracking-tight">
        <span className="block">Hello World!</span>
        <span className="block pl-10 text-blue-800">Next.js TypeScript</span>
      </h1>

      <FlashText color="red" interval={1000} enabledFlash={enabledFlash}>
        Flash Text
      </FlashText>

      <div>
        <button onClick={startFlash}>start</button>
        <button onClick={stopFlash}>stop</button>
      </div>
    </LayoutDefault>
  );
};

export default Home;
