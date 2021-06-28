import { LayoutDefault } from '@/components/layouts/default';
import getSortedPostsData, { Post } from '@/lib/post';
import type { NextPage } from 'next';
import AppLink from '@/components/links/default';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type Props = {
  allPostsData: Post[]
};
const Posts: NextPage<Props> = ({ allPostsData }) => {
  return (
    <LayoutDefault title="First Post">
      <section>
        <h1 className="text-3xl my-5">Blog Title</h1>
        <ul>
          {allPostsData.map(({ id, date, title }: Post) => (
            <li key={id} className="flex flex-col mb-4">
              <time className="text-gray-500 text-sm">{date}</time>
              <h2>{title}</h2>
            </li>
          ))}
        </ul>
      </section>
    </LayoutDefault>
  );
};

export default Posts;
