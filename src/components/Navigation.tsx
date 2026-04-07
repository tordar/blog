import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-3.5 border-b border-border">
      <div className="flex items-center gap-1.5">
        <div className="w-3.5 h-3.5 bg-accent rounded-sm" />
        <div className="flex gap-0.5 font-mono text-xs uppercase tracking-wider">
          <Link
            href="/"
            className="text-foreground bg-accent/15 px-3 py-1.5 rounded-md font-medium"
          >
            Blog
          </Link>
          <a
            href="https://tordar.no"
            className="text-foreground-muted px-3 py-1.5 hover:text-foreground transition-colors"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/tordar"
            className="text-foreground-muted px-3 py-1.5 hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
      <ThemeSwitcher />
    </nav>
  )
}
