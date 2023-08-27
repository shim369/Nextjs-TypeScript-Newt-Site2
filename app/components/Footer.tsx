import Link from 'next/link'
import 'font-awesome/css/font-awesome.min.css';

export const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className={'container'}>
        <p>@2023 Create Next App</p>
        <ul className={'sns-link'}>
          <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
          <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
          <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
        </ul>
      </div>
    </footer>
  )
}
