export interface PostMeta {
  title: string
  date: string
  tags: string[]
  summary: string
  slug: string
  readingTime: number
}

export interface Post extends PostMeta {
  content: string
}

export interface TagCount {
  name: string
  count: number
}
