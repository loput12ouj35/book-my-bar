import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect, FormEventHandler } from 'react'
import useSWR from 'swr'

import { UseComments } from './types'

import { Comment } from 'common/types/comment'

export const useComments: UseComments = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [text, setText] = useState('')
  const [url, setUrl] = useState(null)

  const query = new URLSearchParams({ url })
  const { data: comments = [], mutate } = useCommentListQuery(query)

  useEffect(() => {
    const url = window.location.origin + window.location.pathname
    setUrl(url)
  }, [])

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    const token = await getAccessTokenSilently()

    try {
      await createComment(url, text, token)
      setText('')
      await mutate()
    } catch (err) {
      console.log(err)
    }
  }

  const onDelete = async (comment: Comment) => {
    const token = await getAccessTokenSilently()

    try {
      await deleteComment(url, comment, token)
      await mutate()
    } catch (err) {
      console.log(err)
    }
  }

  return { text, setText, comments, onSubmit, onDelete }
}

// TODO: 리턴 타입 명시
const useCommentListQuery = (query: URLSearchParams) => useSWR(`/api/comment?${query.toString()}`)

const createComment = (url: string, text: string, token: string) =>
  fetch('/api/comment', {
    method: 'POST',
    body: JSON.stringify({ url, text }),
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  })

const deleteComment = (url: string, comment: Comment, token: string) =>
  fetch('/api/comment', {
    method: 'DELETE',
    body: JSON.stringify({ url, comment }),
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  })
