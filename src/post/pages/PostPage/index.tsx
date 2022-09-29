import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { PostPageProps } from './types'

import Comment from 'common/components/Comment'
import Container from 'common/components/Container'
import distanceToNow from 'lib/dateRelative'

const PostPage: FC<PostPageProps> = (props) => {
  const { post } = props
  const router = useRouter()
  const noPost = !router.isFallback && !post?.slug

  return noPost ? (
    <ErrorPage statusCode={404} />
  ) : (
    <Container>
      {router.isFallback ? (
        <div>로딩중...</div>
      ) : (
        <div>
          <article>
            <header>
              <h1 className="text-4xl font-bold">{post.title}</h1>
              {post.excerpt ? <p className="mt-2 text-xl">{post.excerpt}</p> : null}
              <time className="flex mt-2 text-gray-400">{distanceToNow(new Date(post.date))}</time>
            </header>

            <div className="prose mt-10" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          <Comment />
        </div>
      )}
    </Container>
  )
}

export default PostPage
