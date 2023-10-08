import './styles/style.scss'
import type { Metadata } from 'next'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NEXT TECH',
  description: 'NEXT TECH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={'main'}>
          <div className={'container'}>
          {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
