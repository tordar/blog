'use client'

export type SortBy = 'date' | 'name'

interface SortControlsProps {
  sortBy: SortBy
  onSortChange: (sort: SortBy) => void
}

export function SortControls({ sortBy, onSortChange }: SortControlsProps) {
  return (
    <div className="flex pb-5 border-b border-border mb-1">
      <div className="w-[160px] flex-shrink-0">
        <button
          onClick={() => onSortChange('date')}
          className={`text-xs uppercase tracking-[1px] font-medium transition-colors ${
            sortBy === 'date' ? 'text-foreground-secondary' : 'text-foreground-faint'
          }`}
        >
          / DATE
        </button>
      </div>
      <div className="flex-1">
        <button
          onClick={() => onSortChange('name')}
          className={`text-xs uppercase tracking-[1px] font-medium transition-colors ${
            sortBy === 'name' ? 'text-foreground-secondary' : 'text-foreground-faint'
          }`}
        >
          / NAME
        </button>
      </div>
    </div>
  )
}
