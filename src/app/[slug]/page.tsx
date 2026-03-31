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
  return {
    title: `${post.title} — Blog — Tordar Tømmervik`,
    description: post.summary,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article>
      {/* Title hero */}
      <div className="px-6 md:px-10 pt-12 pb-10">
        <h1 className="text-4xl md:text-[52px] font-bold text-foreground tracking-tight leading-[1.1] max-w-[900px]">
          {post.title}
        </h1>
      </div>

      {/* Two-column body */}
      <div className="flex flex-col md:flex-row px-6 md:px-10 pb-16 gap-8 md:gap-12">
        {/* Metadata sidebar */}
        <aside className="w-full md:w-[240px] flex-shrink-0">
          <PostMetadata
            date={post.date}
            readingTime={post.readingTime}
            tags={post.tags}
            slug={post.slug}
            title={post.title}
          />
        </aside>

        {/* Article content */}
        <div className="flex-1 max-w-[680px]">
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
