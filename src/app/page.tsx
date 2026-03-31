import { getAllPostsMeta, getAllTags } from '@/lib/posts'
import { BlogPage } from '@/components/BlogPage'

export default function Home() {
  const posts = getAllPostsMeta()
  const tags = getAllTags()

  return <BlogPage posts={posts} tags={tags} />
}
