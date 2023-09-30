import Link from 'next/link'

export const Header = () => {
  return (
    <header className={'header'}>
        <div className={'header-inner'}>
            <a href="/" className={'logo'}>NEXT TECH</a>
            <nav className={'nav'}>
                <Link href="/about">ABOUT</Link>
                <Link href="/service">SERVICE</Link>
                <Link href="/blog">BLOG</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">CONTACT</Link>
            </nav>
        </div>
        <ul className={'sns-link'}>
          <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
          <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
          <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
        </ul>
    </header>
  )
}
