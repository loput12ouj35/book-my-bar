import { useAuth0 } from '@auth0/auth0-react'
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
    } catch (err) {
      console.error(err)
    }
  }

  return { comments, isValidating, onDelete }
}
