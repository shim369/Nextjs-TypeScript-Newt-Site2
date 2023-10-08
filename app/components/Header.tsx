import Link from 'next/link'
import 'font-awesome/css/font-awesome.min.css';

export const Header = () => {
  return (
    <header className={'header'}>
        <div className={'header-inner'}>
            <a href="/" className={'logo'}>NEXT TECH</a>
            <nav>
                <Link href="/about">ABOUT</Link>
                <Link href="/service">SERVICE</Link>
                <Link href="/blog">BLOG</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">CONTACT</Link>
            </nav>
        </div>
        <ul className={'sns-link'}>
          <li><Link href="https://github.com/shim369" target="_blank"><i className="fa fa-github"></i></Link></li>
          <li><Link href="https://sohtani.pythonanywhere.com/" target="_blank"><i className="fa fa-pencil"></i></Link></li>
        </ul>
    </header>
  )
}
