import Link from 'next/link'
import { FC } from 'react'

import { PostListPageProps } from './types'

import Container from 'common/components/Container'
import distanceToNow from 'lib/dateRelative'

const PostListPage: FC<PostListPageProps> = (props) => {
  const { posts } = props

  return (
    <Container>
      {posts.length ? (
        posts.map((post) => (
          <article key={post.slug} className="mb-10">
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a className="text-lg leading-6 font-bold">{post.title}</a>
            </Link>
            <p>{post.excerpt}</p>
            <div className="text-gray-400">
              <time>{distanceToNow(new Date(post.date))}</time>
            </div>
          </article>
        ))
      ) : (
        <p>글이 없어요!</p>
      )}
    </Container>
  )
}

export default PostListPage
