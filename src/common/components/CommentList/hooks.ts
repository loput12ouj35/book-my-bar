import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { UseCommentList } from './types'

import { useCommentListQuery } from 'common/_query/comments'
import { Comment } from 'common/types/comment'

export const useCommentList: UseCommentList = () => {
  const { getAccessTokenSilently } = useAuth0()
  const { asPath } = useRouter()
  const [url, setUrl] = useState(asPath)

  const query = new URLSearchParams({ url })
  const { data: comments, mutate } = useCommentListQuery(query)

  useEffect(() => {
    setUrl(asPath)
  }, [asPath])

  const onDelete = async (comment: Comment) => {
    const token = await getAccessTokenSilently()

    try {
      await deleteComment(url, comment, token)
      await mutate()
    } catch (err) {
      console.log(err)
    }
  }

  return { comments, onDelete }
}

const deleteComment = (url: string, comment: Comment, token: string) =>
  fetch('/api/comment', {
    method: 'DELETE',
    body: JSON.stringify({ url, comment }),
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  })
