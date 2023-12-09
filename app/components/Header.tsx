"use client";
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import styles from '../styles/page.module.scss';
import { Logo } from './Logo';
import { LinkList } from './LinkList';

export const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pcNavRef = useRef(null);

  const toggleNavClick = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle(styles.open, isNavOpen);

    return () => {
      document.body.classList.remove(styles.open);
    };
  }, [isNavOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (pcNavRef.current) {
        const isScrolled = window.scrollY > 60;
        setIsNavActive(isScrolled);
      }
    };    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={styles.header} data-testid="header">
        <div className={styles.headerInner}>
          <p className={styles.headerLogo}>
            <Logo />
          </p>
          <nav ref={pcNavRef} className={`${styles.pcNav} ${isNavActive ? styles.active : ''}`}>
            <LinkList />
          </nav>
        </div>
        <ul className={styles.snsLink}>
          <li><Link href="https://github.com/shim369" target="_blank" title="GitHub"><FontAwesomeIcon icon={faGithub} /></Link></li>
          <li><Link href="https://sohtani.pythonanywhere.com/" target="_blank" title="TECH BLOG"><FontAwesomeIcon icon={faBlog} /></Link></li>
        </ul>
      </header>
      <div id="jsNavToggle" className={styles.jsNavToggle} onClick={toggleNavClick} data-testid="jsNavToggle">
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
              <Logo />
            </p>
            <nav id="spNav" className={styles.spNav}>
              <LinkList />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};