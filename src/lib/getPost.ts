/* eslint-disable no-redeclare */
import fs from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

import { Post } from 'common/types/post'

const postsDirectory = join(process.cwd(), '_posts')

export const getPostSlugs = (): string[] => fs.readdirSync(postsDirectory)

const ALL_FIELDS: (keyof Post)[] = ['slug', 'title', 'excerpt', 'content', 'date']

type GetPostBySlugReturns<T> = T extends keyof Post ? Pick<Post, T> : Post

export function getPostBySlug(slug: string): Post
export function getPostBySlug<T extends keyof Post>(slug: string, fields: (keyof Post)[]): Pick<Post, T>
export function getPostBySlug<T extends keyof Post | unknown = unknown>(
  slug: string,
  fields: (keyof Post)[] = ALL_FIELDS
): GetPostBySlugReturns<T> {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const post: Partial<Post> = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      post[field] = realSlug
    }
    if (field === 'content') {
      post[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      post[field] = data[field]
    }
  })

  return post as GetPostBySlugReturns<T>
}

export const getAllPosts = <T extends keyof Post>(fields: (keyof Post)[] = []): Pick<Post, T | 'date'>[] => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug<T | 'date'>(slug, [...fields, 'date']))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}
