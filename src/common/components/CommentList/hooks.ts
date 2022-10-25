import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { UseCommentList } from './types'

import { deleteComment } from '_api/comment'
import { useCommentListQuery } from 'common/_query/comments'
import { Comment } from 'common/types/comment'

export const useCommentList: UseCommentList = () => {
  const { getAccessTokenSilently } = useAuth0()
  const { asPath } = useRouter()
  const [url, setUrl] = useState(asPath)

  const query = new URLSearchParams({ url })
  const { data: comments, isValidating, mutate } = useCommentListQuery(query.toString())

  useEffect(() => {
    setUrl(asPath)
  }, [asPath])

  const onDelete = async (comment: Comment) => {
    const token = await getAccessTokenSilently()

    try {
      await deleteComment(url, comment, token)
      await mutate()
    } catch (err) {
      console.error(err)
    }
  }

  return { comments, isValidating, onDelete }
}
