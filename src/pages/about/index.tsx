import { LayoutDefault } from "@/components/layouts/default";
import Link from 'next/link'
import Image from 'next/image'
import type { NextPage } from 'next';

export const About: NextPage = () => {
  return (
    <LayoutDefault>
      <h1 className="text-5xl">This is About Page</h1>
      <div className="my-4">
        Return <Link href="/">First page</Link>
      </div>

      <Image src="/images/profile.jpg" alt="profile" height={144} width={144} />

      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
        <div>1</div>
        <div className="col-start-3">2</div>
        <div>3</div>
        <div>4</div>
        <div className="row-start-1 col-start-2 col-span-2">5</div>
      </div>
    </LayoutDefault>
  );
};

export default About;