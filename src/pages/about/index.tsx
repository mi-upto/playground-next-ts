import { LayoutDefault } from "@/components/layouts/default";
import Link from 'next/link'
import Image from 'next/image'
import type { NextPage } from 'next';
import useSWR from 'swr';

export const About: NextPage = () => {
  const { data, error } = useSWR('https://dog.ceo/api/breeds/image/random', fetch);
  if (error) {
    return <div>failed to load</div>
  }
  if (!data) {
    return <div>loading...</div>
  }

  console.log('data', data);


  return (
    <LayoutDefault>
      <h1 className="text-5xl">This is About Page</h1>
      <div className="my-4">
        Return <Link href="/">First page</Link>
      </div>
      <Image src="/images/profile.jpg" alt="profile" height={144} width={144} />

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
