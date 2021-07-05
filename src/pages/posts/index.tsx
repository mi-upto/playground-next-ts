import { LayoutDefault } from '@/components/layouts/default';
import { getSortedPostsData, Post } from '@/lib/post';
import type { NextPage } from 'next';
// import type { NextPage, GetServerSideProps } from 'next';

// ビルド時のサーバ側でのみ実行されクライアント側で実行されることは無い
// ブラウザのJSバンドルには含まれ無い
// @see https://nextjs.org/learn/basics/data-fetching/getstaticprops-details
export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// リクエストたび SSR
// @see https://nextjs.org/learn/basics/data-fetching/request-time
// type Data = {
//   id: number;   // dummy
//   text: string; // dummy
// };
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch('https://.../data');
//   const data: Data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

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
