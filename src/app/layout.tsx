import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Providers } from '@/components/Providers'
import { Navigation } from '@/components/Navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata = {
  metadataBase: new URL('https://blog.tordar.no'),
  title: 'Blog — Tordar Tømmervik',
  description: 'Technical writing, project write-ups, and reflections by Tordar Tømmervik',
  openGraph: {
    type: 'website',
    siteName: 'Blog — Tordar Tømmervik',
    title: 'Blog — Tordar Tømmervik',
    description: 'Technical writing, project write-ups, and reflections by Tordar Tømmervik',
    url: 'https://blog.tordar.no',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Tordar Tømmervik',
    description: 'Technical writing, project write-ups, and reflections by Tordar Tømmervik',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="ae50303f-a48f-426a-83a0-bc7d9d2e70b7" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  )
}
