import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="text-[22px] font-semibold text-foreground mt-10 mb-4 tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-base leading-[1.75] text-foreground-secondary mb-6">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent underline underline-offset-[3px] hover:text-accent/80 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-[3px] border-accent pl-5 mb-7 text-foreground-secondary italic">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-6 text-foreground-secondary space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-6 text-foreground-secondary space-y-2">
      {children}
    </ol>
  ),
  code: ({ children, className }) => {
    if (!className) {
      return (
        <code className="bg-foreground/5 px-1.5 py-0.5 rounded text-[13px] font-mono text-foreground-secondary">
          {children}
        </code>
      )
    }
    return <code className={className}>{children}</code>
  },
  pre: ({ children }) => (
    <pre className="bg-foreground/[0.03] border border-border rounded-lg p-4 mb-6 overflow-x-auto font-mono text-[13px] leading-relaxed">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => (
    <a href={src} target="_blank" rel="noopener noreferrer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt || ''} className="rounded-lg mb-6 w-full cursor-zoom-in" />
    </a>
  ),
  hr: () => <hr className="border-border my-8" />,
}
