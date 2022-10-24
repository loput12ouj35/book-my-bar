import { Divider, Space, Typography } from 'antd'
import Link from 'next/link'
import { FC } from 'react'

import { PostListPageProps } from './types'

import { CommonSection } from 'common/components'
import distanceToNow from 'lib/dateRelative'

const PostListPage: FC<PostListPageProps> = (props) => {
  const { posts } = props

  return (
    <CommonSection>
      {posts.length ? (
        posts.map((post, i) => (
          <>
            {i > 0 && <Divider />}
            <article key={post.slug}>
              <Space direction="vertical">
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                  <a>
                    <Typography.Title level={3}>{post.title}</Typography.Title>
                  </a>
                </Link>
                <Typography.Text>{post.excerpt}</Typography.Text>
                <Typography.Text type="secondary">
                  <time>{distanceToNow(new Date(post.date))}</time>
                </Typography.Text>
              </Space>
            </article>
          </>
        ))
      ) : (
        <Typography.Text>글이 없어요!</Typography.Text>
      )}
    </CommonSection>
  )
}

export default PostListPage
