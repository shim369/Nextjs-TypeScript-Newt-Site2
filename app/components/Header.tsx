"use client";
import Link from 'next/link'
import 'font-awesome/css/font-awesome.min.css'
import { useEffect, useRef } from "react"

export const Header = () => {
  const navLinks = useRef<HTMLElement[]>([]);
  const spNav = useRef<HTMLElement | null>(null);
  const navToggle = useRef<HTMLElement | null>(null);

  useEffect(() => {
    navLinks.current = Array.from(document.querySelectorAll(".pc-nav a"));
    spNav.current = document.querySelector(".sp-nav");
    navToggle.current = document.getElementById("nav-toggle");

    if (navLinks.current.length > 0 && spNav.current && navToggle.current) {
      navLinks.current.forEach((link) => {
        spNav.current!.appendChild(link.cloneNode(true));
      });

      let body = document.body;

      navToggle.current.addEventListener("click", () => {
        body.classList.toggle("open");
      });

      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 60 ||
          document.documentElement.scrollTop > 60
        ) {
          navToggle.current!.classList.add("active");
        } else {
          navToggle.current!.classList.remove("active");
        }
      });
    }
  }, []);

  return (
    <>
    <header className={'header'}>
        <div className={'header-inner'}>
            <Link href="/" className={'header-logo'}>NEXT TECH</Link>
            <nav className={'pc-nav'}>
                <Link href="/">TOP</Link>
                <Link href="/about">ABOUT</Link>
                <Link href="/service">SERVICE</Link>
                <Link href="/blog">BLOG</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">CONTACT</Link>
            </nav>
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
              <Link href="/">NEXT TECH</Link>
            </p>
            <nav className={'sp-nav'}></nav>
        </div>
      </div>
    </div>
    </>
  )
}