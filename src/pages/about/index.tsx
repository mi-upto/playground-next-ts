import { LayoutDefault } from "@/components/layouts/default";
import Link from 'next/link'
import Image from 'next/image'
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getRandomDogImages } from '@/lib/dog';


export const About: NextPage = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    getRandomDogImages().then((url) => {
      setUrl(url);
    });
  }, []);

  return (
    <LayoutDefault>
      <h1 className="my-10 text-gray-900 text-5xl font-bold tracking-tight">
        This is About Page
      </h1>
      <div className="my-4">
        Return <Link href="/">First page</Link>
      </div>
      {url && <Image src={url} alt="profile" height={144} width={144} />}

      <div className="grid gap-4 grid-flow-col grid-cols-3 grid-rows-2">
        <div>1</div>
        <div className="col-start-3">2</div>
        <div>3</div>
        <div>4</div>
        <div className="col-span-2 col-start-2 row-start-1">5</div>
      </div>
    </LayoutDefault>
  );
};

export default About;
