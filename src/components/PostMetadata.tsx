import { ShareButtons } from './ShareButtons'
import { formatDate } from '@/lib/utils'

interface PostMetadataProps {
  date: string
  readingTime: number
  tags: string[]
  slug: string
  title: string
}

function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start border-b border-border/60 py-3.5 gap-4">
      <span className="uppercase tracking-wider text-foreground-dim text-[11px] font-mono w-1/2 pt-0.5 flex-shrink-0">
        {label}:
      </span>
      <div className="w-1/2 font-mono text-xs">
        {children}
      </div>
    </div>
  )
}

export function PostMetadata({ date, readingTime, tags, slug, title }: PostMetadataProps) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[1.5px] text-foreground-dim font-medium pb-3.5 border-b border-border mb-1">
        / METADATA
      </div>

      <MetaRow label="DATE">
        <span className="text-foreground-faint">{formatDate(date)}</span>
      </MetaRow>

      <MetaRow label="AUTHOR">
        <span className="text-accent border border-accent/25 px-2 py-0.5 rounded inline-block">
          TORDAR
        </span>
      </MetaRow>

      <MetaRow label="READING TIME">
        <span className="text-foreground-faint">{readingTime} MIN READ</span>
      </MetaRow>

      <MetaRow label="CATEGORIES">
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
      </MetaRow>

      <div className="border-b border-border/60 py-3.5">
        <span className="uppercase tracking-wider text-foreground-dim text-[11px] font-mono block mb-2.5">SHARE:</span>
        <ShareButtons title={title} slug={slug} />
      </div>
    </div>
  )
}
