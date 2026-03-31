import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { PostMeta, Post, TagCount } from './types'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

function getPostFiles(): { slug: string; filePath: string }[] {
  const entries = fs.readdirSync(POSTS_DIR, { withFileTypes: true })
  const posts: { slug: string; filePath: string }[] = []

  for (const entry of entries) {
    if (entry.name === '.gitkeep') continue

    if (entry.isFile() && entry.name.endsWith('.mdx')) {
      posts.push({
        slug: entry.name.replace(/\.mdx$/, ''),
        filePath: path.join(POSTS_DIR, entry.name),
      })
    } else if (entry.isDirectory()) {
      const indexPath = path.join(POSTS_DIR, entry.name, 'index.mdx')
      if (fs.existsSync(indexPath)) {
        posts.push({
          slug: entry.name,
          filePath: indexPath,
        })
      }
    }
  }

  return posts
}

function parsePost(slug: string, filePath: string): Post {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    title: data.title,
    date: data.date instanceof Date ? data.date.toISOString().split('T')[0] : String(data.date),
    tags: data.tags || [],
    summary: data.summary || '',
    slug,
    readingTime: Math.ceil(stats.minutes),
    content,
  }
}

export function getAllPostsMeta(): PostMeta[] {
  return getPostFiles()
    .map(({ slug, filePath }) => {
      const post = parsePost(slug, filePath)
      const { content, ...meta } = post
      return meta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const files = getPostFiles()
  const match = files.find(f => f.slug === slug)
  if (!match) return null
  return parsePost(match.slug, match.filePath)
}

export function getAllTags(): TagCount[] {
  const posts = getAllPostsMeta()
  const tagMap = new Map<string, number>()

  for (const post of posts) {
    for (const tag of post.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
    }
  }

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
