import './styles/style.scss'
import type { Metadata } from 'next'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" />
      </head>
      <body>
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