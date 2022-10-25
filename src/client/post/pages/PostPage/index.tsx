import { Descriptions, PageHeader, Typography } from 'antd'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './.module.scss'
import { PostPageProps } from './types'

import { CommentForm, CommentList, CommonSection } from 'client/common/components'

const PostPage: FC<PostPageProps> = (props) => {
  const { post } = props
  const router = useRouter()
  const noPost = !router.isFallback && !post?.slug

  return noPost ? (
    <ErrorPage statusCode={404} />
  ) : router.isFallback ? (
    <Typography.Text disabled>로딩중...</Typography.Text>
  ) : (
    <CommonSection>
      <PageHeader className={styles.header} onBack={() => window.history.back()} title={post.title} ghost={false}>
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
    </CommonSection>
  )
}

export default PostPage
