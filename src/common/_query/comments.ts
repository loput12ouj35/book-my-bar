import useSWR, { SWRResponse } from 'swr'

import { getComments } from '_api/comment'
import { Comment } from 'common/types/comment'

// TODO: 리턴 타입 명시
export const useCommentListQuery = (queryString: string): SWRResponse<Comment[]> =>
  useSWR(['comments', queryString], () => getComments(queryString))
