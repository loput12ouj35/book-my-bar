import { Post } from 'common/types/post'

export interface PostListPageProps extends CommonPageProps {
  posts: Pick<Post, 'slug' | 'title' | 'excerpt' | 'date'>[]
}
