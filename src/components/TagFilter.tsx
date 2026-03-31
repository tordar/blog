'use client'

import type { TagCount } from '@/lib/types'

interface TagFilterProps {
  tags: TagCount[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
}

export function TagFilter({ tags, selectedTags, onTagToggle }: TagFilterProps) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[1.5px] text-foreground-dim font-medium pb-4 border-b border-border">
        / FILTERS
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2.5 mb-4">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" className="opacity-40">
            <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M4 3V1.5C4 1.2 4.2 1 4.5 1H11.5C11.8 1 12 1.2 12 1.5V3" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          <span className="text-sm text-foreground-faint font-medium">Topic</span>
        </div>

        <div className="relative pl-3 ml-1">
          <div className="absolute left-0 top-0 bottom-2 w-px border-l border-dashed border-border" />

          <div className="flex flex-col gap-3 pl-3.5">
            {tags.map(tag => (
              <button
                key={tag.name}
                onClick={() => onTagToggle(tag.name)}
                className="flex items-center gap-3 cursor-pointer text-foreground-muted text-sm hover:text-foreground-secondary transition-colors"
              >
                <span
                  className={`w-[18px] h-[18px] rounded-[3px] border-[1.5px] flex-shrink-0 flex items-center justify-center transition-colors ${
                    selectedTags.includes(tag.name)
                      ? 'bg-accent border-accent'
                      : 'border-border'
                  }`}
                >
                  {selectedTags.includes(tag.name) && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </span>
                {tag.name} ({tag.count})
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
