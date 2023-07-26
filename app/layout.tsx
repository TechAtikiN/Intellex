// named imports
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
// default imports
import './globals.css'
import ModalProvider from '@/components/modal/ModalProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Intellex',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={inter.className}
        >
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
