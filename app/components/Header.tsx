"use client";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import styles from '../styles/css/page.module.css';

export const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavClick = () => {
    setIsNavOpen((prev) => {
      const newNavState = !prev;
      document.body.classList.toggle(styles.open, newNavState);
      return newNavState;
    });
  };

  useEffect(() => {
    const spNav = document.querySelector("#spNav");
    if (spNav) {
      const navLinks = Array.from(document.querySelectorAll("#pcNav a"));
      navLinks.forEach((link) => {
        spNav.appendChild(link.cloneNode(true));
      });
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle(styles.open, isNavOpen);

    return () => {
      document.body.classList.remove(styles.open);
    };
  }, [isNavOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const pcNav = document.querySelector("#pcNav");

      if (pcNav) {
        if (
          document.body.scrollTop > 60 ||
          document.documentElement.scrollTop > 60
        ) {
          pcNav.classList.add(styles.active);
        } else {
          pcNav.classList.remove(styles.active);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isNavActive ? styles.active : ''}`}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.headerLogo}>NEXT TECH</Link>
          <nav id="pcNav" className={styles.pcNav}>
            <Link href="/">TOP</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/service">SERVICE</Link>
            <Link href="/blog">BLOG</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
        </div>
        <ul className={styles.snsLink}>
          <li><Link href="https://github.com/shim369" target="_blank" title="GitHub"><FontAwesomeIcon icon={faGithub} /></Link></li>
          <li><Link href="https://sohtani.pythonanywhere.com/" target="_blank" title="TECH BLOG"><FontAwesomeIcon icon={faBlog} /></Link></li>
        </ul>
      </header>
      <div id="jsNavToggle" className={styles.jsNavToggle} onClick={toggleNavClick}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="jsSpNav" className={styles.jsSpNav}>
        <div className={styles.spNavInner}>
          <div className={styles.spNavLinks}>
            <p className={styles.logo}>
              <Link href="/">NEXT TECH</Link>
            </p>
            <nav id="spNav" className={styles.spNav}></nav>
          </div>
        </div>
      </div>
    </>
  );
};
