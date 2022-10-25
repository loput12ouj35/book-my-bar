import useSWR, { SWRResponse } from 'swr'

import { getComments } from 'client/_api/comment'
import { Comment } from 'common/types/comment'

export const useCommentListQuery = (queryString: string): SWRResponse<Comment[]> =>
  useSWR(['comments', queryString], () => getComments(queryString))
