'use client'

interface ShareButtonsProps {
  title: string
  slug: string
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const url = `https://blog.tordar.no/${slug}`

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      '_blank'
    )
  }

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank'
    )
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={shareTwitter}
        className="text-foreground-muted border border-border px-4 py-1.5 rounded-md font-mono text-[11px] hover:text-foreground hover:border-foreground-dim transition-colors flex-1 text-center"
      >
        Twitter/X
      </button>
      <button
        onClick={shareLinkedIn}
        className="text-foreground-muted border border-border px-4 py-1.5 rounded-md font-mono text-[11px] hover:text-foreground hover:border-foreground-dim transition-colors flex-1 text-center"
      >
        LinkedIn
      </button>
    </div>
  )
}
