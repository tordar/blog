import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import { getAllPostsMeta, getPostBySlug } from '@/lib/posts'
import { PostMetadata } from '@/components/PostMetadata'
import { mdxComponents } from '@/components/MdxComponents'

export function generateStaticParams() {
  return getAllPostsMeta().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }
  const url = `https://blog.tordar.no/${slug}`
  return {
    title: `${post.title} — Blog — Tordar Tømmervik`,
    description: post.summary,
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
      authors: ['Tordar Tømmervik'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Tordar Tømmervik',
      url: 'https://tordar.no',
    },
    url: `https://blog.tordar.no/${post.slug}`,
    keywords: post.tags.join(', '),
  }

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Title hero */}
      <div className="px-6 md:px-10 pt-12 pb-10 max-w-[1400px]">
        <h1 className="text-4xl md:text-[52px] font-bold text-foreground tracking-tight leading-[1.1] max-w-[900px]">
          {post.title}
        </h1>
      </div>

      {/* Two-column body */}
      <div className="flex flex-col md:flex-row px-6 md:px-10 pb-16 gap-8 md:gap-12 max-w-[1400px]">
        {/* Metadata sidebar */}
        <aside className="w-full md:w-[420px] flex-shrink-0 md:sticky md:top-6 md:self-start">
          <PostMetadata
            date={post.date}
            readingTime={post.readingTime}
            tags={post.tags}
            slug={post.slug}
            title={post.title}
          />
        </aside>

        {/* Article content */}
        <div className="flex-1 min-w-0">
          <div className="text-[11px] uppercase tracking-[1.5px] text-foreground-dim font-medium pb-3.5 border-b border-border mb-7">
            / ARTICLE
          </div>

          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [rehypePrettyCode, { theme: 'github-dark-dimmed', keepBackground: false }],
                ],
              },
            }}
          />
        </div>
      </div>
    </article>
  )
}
