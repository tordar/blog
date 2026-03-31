'use client'

import { useState, useMemo } from 'react'
import type { PostMeta, TagCount } from '@/lib/types'
import { TagFilter } from './TagFilter'
import { SortControls, type SortBy } from './SortControls'
import { PostRow } from './PostRow'

interface BlogPageProps {
  posts: PostMeta[]
  tags: TagCount[]
}

export function BlogPage({ posts, tags }: BlogPageProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<SortBy>('date')

  const filteredPosts = useMemo(() => {
    let result = posts

    if (selectedTags.length > 0) {
      result = result.filter(post =>
        post.tags.some(tag => selectedTags.includes(tag))
      )
    }

    if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title))
    }

    return result
  }, [posts, selectedTags, sortBy])

  function handleTagToggle(tag: string) {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="flex">
      {/* Left column — sidebar (desktop only) */}
      <aside className="hidden md:block w-[220px] flex-shrink-0 pt-10 pl-10">
        <div className="mb-8">
          <div className="flex items-start gap-1.5">
            <span className="text-[64px] font-bold text-foreground tracking-tighter leading-none">
              Blog
            </span>
            <span className="text-[15px] text-accent font-medium mt-2">
              ({filteredPosts.length})
            </span>
          </div>
        </div>

        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
        />
      </aside>

      {/* Right column — post list */}
      <main className="flex-1 pt-10 px-6 md:px-10 md:pl-12">
        {/* Mobile header */}
        <div className="md:hidden mb-6">
          <div className="flex items-start gap-1.5 mb-4">
            <span className="text-4xl font-bold text-foreground tracking-tight leading-none">
              Blog
            </span>
            <span className="text-sm text-accent font-medium mt-1">
              ({filteredPosts.length})
            </span>
          </div>

          {/* Mobile filters */}
          <div className="text-[11px] uppercase tracking-[1.5px] text-foreground-dim font-medium pb-3 border-b border-border">
            / FILTERS
          </div>
          <div className="flex items-center gap-4 py-3 border-b border-border overflow-x-auto">
            <div className="flex items-center gap-2 flex-shrink-0">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" className="opacity-40">
                <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M4 3V1.5C4 1.2 4.2 1 4.5 1H11.5C11.8 1 12 1.2 12 1.5V3" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              <span className="text-sm text-foreground-faint font-medium">Topic</span>
            </div>
            <div className="w-px h-5 bg-border flex-shrink-0" />
            <div className="flex gap-3.5">
              {tags.map(tag => (
                <button
                  key={tag.name}
                  onClick={() => handleTagToggle(tag.name)}
                  className={`text-sm whitespace-nowrap transition-colors ${
                    selectedTags.includes(tag.name)
                      ? 'text-accent font-medium'
                      : 'text-foreground-muted'
                  }`}
                >
                  {tag.name} ({tag.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        <SortControls sortBy={sortBy} onSortChange={setSortBy} />

        {/* Post rows */}
        <div>
          {filteredPosts.map(post => (
            <PostRow key={post.slug} post={post} />
          ))}
          {filteredPosts.length === 0 && (
            <div className="py-12 text-foreground-muted text-center">
              No posts match the selected filters.
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
