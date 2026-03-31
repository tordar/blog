import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Providers } from '@/components/Providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata = {
  title: 'Blog — Tordar Tømmervik',
  description: 'Technical writing, project write-ups, and reflections by Tordar Tømmervik',
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
          {children}
        </Providers>
      </body>
    </html>
  )
}
