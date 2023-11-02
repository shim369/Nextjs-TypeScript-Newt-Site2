"use client";
import Link from 'next/link'
import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useRef } from "react"

export const Header = () => {
	const navLinks = useRef<HTMLElement[]>([]);
	const spNav = useRef<HTMLElement | null>(null);
  useEffect(() => {
    navLinks.current = Array.from(document.querySelectorAll(".pc-nav a"));
    spNav.current = document.querySelector(".sp-nav");
  
    if (navLinks.current.length > 0 && spNav.current) {
      navLinks.current.forEach(link => {
        spNav.current!.appendChild(link.cloneNode(true));
      });
    }

    let navToggle = document.getElementById('nav-toggle');
    let body = document.body;

    if (navToggle) {
      navToggle.addEventListener('click', function() {
        body.classList.toggle('open');
      });
    }
  }, []); 

  return (
    <>
    <header className={'header'}>
        <div className={'header-inner'}>
          <div className={'top-left'}>
            <nav className={'pc-nav'}>
                <Link href="/">TOP</Link>
                <Link href="/about">ABOUT</Link>
                <Link href="/service">SERVICE</Link>
                <Link href="/blog">BLOG</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">CONTACT</Link>
            </nav>
          </div>
        </div>
        <ul className={'sns-link'}>
          <li><Link href="https://github.com/shim369" target="_blank" title="GitHub"><i className="fa fa-github"></i></Link></li>
          <li><Link href="https://sohtani.pythonanywhere.com/" target="_blank" title="TECH BLOG"><i className="fa fa-pencil"></i></Link></li>
        </ul>
    </header>
    <div id="nav-toggle">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="sp-nav">
      <div className={'sp-nav-inner'}>
        <div className={'sp-nav-links'}>
            <p className={'logo'}>
              <Link href="/">Next Tech</Link>
            </p>
            <nav className={'sp-nav'}></nav>
        </div>
      </div>
    </div>
    </>
  )
}