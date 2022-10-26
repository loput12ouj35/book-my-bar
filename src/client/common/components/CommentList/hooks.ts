import { useAuth0 } from '@auth0/auth0-react'
import { message } from 'antd'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { UseCommentList } from './types'

import { deleteComment } from 'client/_api/comment'
import { useCommentListQuery } from 'client/common/_query/comments'
import { Comment } from 'common/types/comment'

export const useCommentList: UseCommentList = () => {
  const { getAccessTokenSilently } = useAuth0()
  const { asPath } = useRouter()
  const [url, setUrl] = useState(asPath)

  const { data: comments = [], isValidating, mutate } = useCommentListQuery({ url })

  useEffect(() => {
    setUrl(asPath)
  }, [asPath])

  const onDelete = async (comment: Comment) => {
    const token = await getAccessTokenSilently()
    const body = { url, comment }

    try {
      await deleteComment(body, token)
      await mutate()
      message.success('댓글삭제가 성공했어요.')
    } catch (err) {
      message.error('댓글삭제가 실패했어요.')
    }
  }

  return { comments, isValidating, onDelete }
}
