import useSWR, { SWRResponse } from 'swr'

import { getComments } from 'client/_api/comment'
import { Comment, GetCommentsRequestQuery } from 'common/types/comment'

export const useCommentListQuery = (query: GetCommentsRequestQuery): SWRResponse<Comment[]> =>
  useSWR(['comments', query], () => getComments(query))
