import { describe, it, expect, beforeAll } from 'vitest'
import { getAllPostsMeta, getPostBySlug, getAllTags } from '@/lib/posts'
import type { PostMeta, TagCount } from '@/lib/types'

describe('posts', () => {
  let allPosts: PostMeta[]

  beforeAll(() => {
    allPosts = getAllPostsMeta()
  })

  it('reads all posts from content directory', () => {
    expect(allPosts.length).toBeGreaterThan(0)
  })

  it('parses frontmatter correctly', () => {
    const post = allPosts[0]
    expect(post.title).toBeTruthy()
    expect(post.date).toBeTruthy()
    expect(post.tags).toBeInstanceOf(Array)
    expect(post.summary).toBeTruthy()
    expect(post.slug).toBeTruthy()
    expect(post.readingTime).toBeGreaterThan(0)
  })

  it('sorts posts by date descending', () => {
    if (allPosts.length > 1) {
      const dates = allPosts.map(p => new Date(p.date).getTime())
      for (let i = 1; i < dates.length; i++) {
        expect(dates[i - 1]).toBeGreaterThanOrEqual(dates[i])
      }
    }
  })

  it('gets a post by slug with content', () => {
    const slug = allPosts[0].slug
    const post = getPostBySlug(slug)
    expect(post).not.toBeNull()
    expect(post!.content).toBeTruthy()
    expect(post!.title).toBe(allPosts[0].title)
  })

  it('returns null for non-existent slug', () => {
    expect(getPostBySlug('non-existent-post')).toBeNull()
  })

  it('collects all tags with counts', () => {
    const tags: TagCount[] = getAllTags()
    expect(tags.length).toBeGreaterThan(0)
    tags.forEach(tag => {
      expect(tag.name).toBeTruthy()
      expect(tag.count).toBeGreaterThan(0)
    })
  })
})
