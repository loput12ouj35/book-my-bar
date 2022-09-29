import { Descriptions, PageHeader, Space, Typography } from 'antd'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { PostPageProps } from './types'

import CommentForm from 'common/components/CommentForm'
import CommentList from 'common/components/CommentList'

const PostPage: FC<PostPageProps> = (props) => {
  const { post } = props
  const router = useRouter()
  const noPost = !router.isFallback && !post?.slug

  return noPost ? (
    <ErrorPage statusCode={404} />
  ) : router.isFallback ? (
    <Typography.Text disabled>로딩중...</Typography.Text>
  ) : (
    <Space size="large" direction="vertical">
      <PageHeader onBack={() => window.history.back()} title={post.title} ghost={false} style={{ padding: 0 }}>
        <Descriptions size="small" column={1}>
          <Descriptions.Item>
            <Typography.Text type="secondary">{post.excerpt}</Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item>
            <Typography.Text type="secondary">
              작성일: <time>{post.date}</time>
            </Typography.Text>
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <CommentForm />
      <CommentList />
    </Space>
  )
}

export default PostPage
