import { LayoutDefault } from '@/components/layouts/default';
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getAllPostIds, getPostData, Post } from '@/lib/post';

// 事前レンダリングしたい id を指定する
// ここで指定しなかった id はリクエスト時にレンダリングされる（SSR)
// @see https://vercel.com/docs/next.js/incremental-static-regeneration#
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

type Props = {
  postData: Post;
};
interface Params extends ParsedUrlQuery {
  id: string;
}


export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const params = context.params!
  const postData = await getPostData(params.id);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postData,
    },
  };
};

export const PostDetail: NextPage<Props> = ({ postData }) => {
  return (
    <LayoutDefault title={postData.title}>
      <h1>{postData.title}</h1>
      <span>{postData.id}</span>
      <time>{postData.date}</time>

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </LayoutDefault>
  );
};

export default PostDetail;
