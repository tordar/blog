import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export const runtime = 'nodejs'

export const alt = 'Blog post'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  const title = post?.title ?? 'Blog'
  const date = post ? formatDate(post.date) : ''
  const tags = post?.tags ?? []

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top: domain */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: '#797980', fontSize: 18, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            blog.tordar.no
          </span>
        </div>

        {/* Middle: title */}
        <div
          style={{
            color: '#fafafa',
            fontSize: title.length > 60 ? 52 : 64,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: 960,
          }}
        >
          {title}
        </div>

        {/* Bottom: date + tags */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {date ? (
            <span style={{ color: '#797980', fontSize: 20, fontFamily: 'monospace' }}>
              {date}
            </span>
          ) : null}
          {tags.length > 0 && date ? (
            <span style={{ color: '#3f3f46', fontSize: 20 }}>·</span>
          ) : null}
          {tags.map(tag => (
            <span
              key={tag}
              style={{
                color: '#a78bfa',
                border: '1px solid rgba(167,139,250,0.3)',
                borderRadius: 6,
                padding: '4px 12px',
                fontSize: 16,
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
