import { Divider, Space, Typography } from 'antd'
import Link from 'next/link'
import { FC, Fragment } from 'react'

import { PostListPageProps } from './types'

import { CommonSection } from 'client/common/components'
import distanceToNow from 'server/dateRelative'

const PostListPage: FC<PostListPageProps> = (props) => {
  const { posts } = props

  return (
    <CommonSection>
      {posts.length ? (
        posts.map((post, i) => (
          <Fragment key={post.slug}>
            {i > 0 && <Divider />}
            <article>
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
          </Fragment>
        ))
      ) : (
        <Typography.Text>글이 없어요!</Typography.Text>
      )}
    </CommonSection>
  )
}

export default PostListPage
