import Link from 'next/link'
import type { PostMeta } from '@/lib/types'
import { formatDate } from '@/lib/utils'

export function PostRow({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/${post.slug}`}
      className="flex items-center py-[18px] border-b border-border-subtle group"
    >
      {/* Desktop: inline date + title */}
      <div className="hidden md:flex items-center flex-1">
        <div className="flex items-center gap-3 w-[160px] flex-shrink-0">
          <div className="w-[11px] h-[11px] bg-accent rounded-sm" />
          <span className="font-mono text-[13px] text-foreground-dim tracking-wider">
            {formatDate(post.date)}
          </span>
        </div>
        <div className="flex-1 text-lg text-foreground-secondary group-hover:text-foreground transition-colors">
          {post.title}
        </div>
      </div>

      {/* Mobile: stacked date above title */}
      <div className="flex md:hidden flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-[10px] h-[10px] bg-accent rounded-sm" />
          <span className="font-mono text-xs text-foreground-dim">
            {formatDate(post.date)}
          </span>
        </div>
        <span className="text-[17px] text-foreground-secondary group-hover:text-foreground transition-colors leading-snug">
          {post.title}
        </span>
      </div>

      <span className="text-xl text-foreground-faint/50 ml-3 group-hover:text-foreground-muted transition-colors">
        +
      </span>
    </Link>
  )
}
