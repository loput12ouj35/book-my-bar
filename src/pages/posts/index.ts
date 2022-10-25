import { GetStaticProps } from 'next'

import { getAllPosts } from '../../server/getPost'

import { PostListPageProps } from 'post/pages/PostListPage/types'

export { default } from 'post/pages/PostListPage'

export const getStaticProps: GetStaticProps<PostListPageProps> = () => {
  const posts = getAllPosts<'slug' | 'title' | 'excerpt'>(['slug', 'title', 'excerpt'])

  return {
    props: {
      posts,
      title: '글 보기',
    },
  }
}
