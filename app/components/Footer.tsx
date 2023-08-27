import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className={'container'}>
        <p>@2023 Create Next App</p>
        <ul className={'sns-link'}>
          <li><Link href="#">Facebook</Link></li>
          <li><Link href="#">Twitter</Link></li>
          <li><Link href="#">LinkedIn</Link></li>
        </ul>
      </div>
    </footer>
  )
}
