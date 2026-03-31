import { ShareButtons } from './ShareButtons'
import { formatDate } from '@/lib/utils'

interface PostMetadataProps {
  date: string
  readingTime: number
  tags: string[]
  slug: string
  title: string
}

export function PostMetadata({ date, readingTime, tags, slug, title }: PostMetadataProps) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[1.5px] text-foreground-dim font-medium pb-3.5 border-b border-border mb-5">
        / METADATA
      </div>

      <div className="flex flex-col gap-5 font-mono text-xs">
        <div className="flex flex-col gap-1">
          <span className="uppercase tracking-wider text-foreground-dim text-[11px]">DATE:</span>
          <span className="text-foreground-faint">{formatDate(date)}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="uppercase tracking-wider text-foreground-dim text-[11px]">AUTHOR:</span>
          <span className="text-accent border border-accent/25 px-2 py-0.5 rounded w-fit">
            TORDAR
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="uppercase tracking-wider text-foreground-dim text-[11px]">READING TIME:</span>
          <span className="text-foreground-faint">{readingTime} MIN READ</span>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="uppercase tracking-wider text-foreground-dim text-[11px]">CATEGORIES:</span>
          <div className="flex flex-wrap gap-1.5">
            {tags.map(tag => (
              <span
                key={tag}
                className="text-accent border border-accent/25 px-2 py-0.5 rounded uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <span className="uppercase tracking-wider text-foreground-dim text-[11px] block mb-2.5">SHARE:</span>
          <ShareButtons title={title} slug={slug} />
        </div>
      </div>
    </div>
  )
}
