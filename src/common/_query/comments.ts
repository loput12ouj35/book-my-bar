import useSWR from 'swr'

// TODO: 리턴 타입 명시
export const useCommentListQuery = (query: URLSearchParams) => useSWR(`/api/comment?${query.toString()}`)
