import { Tulpen_One, Lato } from "next/font/google"
import './styles/globals.scss'
import styles from './styles/layout.module.scss'
import type { Metadata } from 'next'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import 'slide/slide-bundle.min.css'

config.autoAddCss = false


const tulpen_one = Tulpen_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-tulpen_One',
  display: "swap",
})
const lato = Lato({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-lato',
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: 'NEXT TECH',
    template: '%s | NEXT TECH',
  },
  description: 'NEXT TECH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${tulpen_one.variable} ${lato.variable}`}>
      <body suppressHydrationWarning={true}>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}