"use client";
import Link from 'next/link'
import { useEffect, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import '../styles/css/layout.css'

export const Header = () => {

  useEffect(() => {
    const pcNav = document.querySelector(".pcNav");
    const navLinks = Array.from(document.querySelectorAll(".pcNav a"));
    const spNav = document.querySelector(".spNav");
    const navToggle = document.getElementById("jsNavToggle");

    if (navLinks.length > 0 && spNav && navToggle) {
      navLinks.forEach((link) => {
        spNav.appendChild(link.cloneNode(true));
      });

      let body = document.body;

      navToggle.addEventListener("click", () => {
        body.classList.toggle("open");
      });

      if(pcNav) { 
        window.addEventListener("scroll", () => {
          if(
            document.body.scrollTop > 60 ||
            document.documentElement.scrollTop > 60
          ) {
            pcNav.classList.add("active");
          } else {
            pcNav.classList.remove("active");
          }
        });
      }
    }
  }, []);

  return (
    <>
    <header className='header'>
        <div className='headerInner'>
            <Link href="/" className='headerLogo'>NEXT TECH</Link>
            <nav className='pcNav'>
                <Link href="/">TOP</Link>
                <Link href="/about">ABOUT</Link>
                <Link href="/service">SERVICE</Link>
                <Link href="/blog">BLOG</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">CONTACT</Link>
            </nav>
        </div>
        <ul className='snsLink'>
          <li><Link href="https://github.com/shim369" target="_blank" title="GitHub"><FontAwesomeIcon icon={faGithub} /></Link></li>
          <li><Link href="https://sohtani.pythonanywhere.com/" target="_blank" title="TECH BLOG"><FontAwesomeIcon icon={faBlog} /></Link></li>
        </ul>
    </header>
    <div id="jsNavToggle">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="jsSpNav">
      <div className='spNavInner'>
        <div className='spNavLinks'>
            <p className='logo'>
              <Link href="/">NEXT TECH</Link>
            </p>
            <nav className='spNav'></nav>
        </div>
      </div>
    </div>
    </>
  )
}