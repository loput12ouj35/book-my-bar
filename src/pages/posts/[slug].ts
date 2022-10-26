import { GetStaticPaths, GetStaticProps } from 'next'

import { getAllPosts, getPostBySlug } from '../../server/getPost'
import markdownToHtml from '../../server/markdownToHtml'

import { PostPageProps } from 'client/post/pages/PostPage/types'

export { default } from 'client/post/pages/PostPage'

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params = {} }) => {
  const { slug } = params
  const _slug = Array.isArray(slug) ? slug.join('/') : slug ?? ''
  const post = getPostBySlug(_slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: { ...post, content },
      title: post.title,
      hasBackButtonOnHeader: true,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts<'slug'>(['slug'])

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}
