import Link from 'next/link'

export const Header = () => {
  return (
    <header className={'header'}>
        <a href="/" className={'logo'}>Logo</a>
        <nav className={'nav'}>
            <Link href="/about">about</Link>
            <Link href="/service">service</Link>
            <Link href="/blog">blog</Link>
            <Link href="/faq">q&a</Link>
            <Link href="/contact">contact</Link>
        </nav>
    </header>
  )
}
