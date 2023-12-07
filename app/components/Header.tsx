"use client";
import React, { useEffect, useState } from 'react';
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
      const pcNav = document.querySelector("#pcNav");

      if (pcNav) {
        const isScrolled = document.body.scrollTop > 60 || document.documentElement.scrollTop > 60;
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
      <header className={`${styles.header} ${isNavActive ? styles.active : ''}`}>
        <div className={styles.headerInner}>
          <p className={styles.headerLogo}>
            <Logo />
          </p>
          <nav id="pcNav" className={styles.pcNav}>
            <LinkList />
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
