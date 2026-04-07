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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  )
}
