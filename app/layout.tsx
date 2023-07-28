// named imports
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import { CrispProvider } from '@/components/chat/CrispProvider'

// default imports
import './globals.css'
import ModalProvider from '@/components/modal/ModalProvider'
import ToasterProvider from '@/components/globals/ToasterProvider'

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
      <html lang='en'>
        <CrispProvider />
        <body
          className={inter.className}
        >
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
