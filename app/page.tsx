"use client"
import React, { useRef, useEffect } from 'react'
import Gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import styles from './styles/page.module.scss'
import { SwiperBox } from './components/SwiperBox'
import { Contact } from './components/Contact'
import { Service } from './components/Service'
import video_mp4 from './assets/video.mp4'
import video_webm from './assets/video.webm'

Gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const openingLogo = document.getElementById('openingLogo');
    const openingAnimation = document.getElementById('openingAnimation');
    const topLeftInner = document.getElementById('topLeftInner');
    const topRight = document.getElementById('topRight');
    Gsap.set(openingLogo, { autoAlpha: 0 });
    Gsap.set(topLeftInner, { y: '30px', autoAlpha: 0 });
    Gsap.set(topRight, { autoAlpha: 0 });

    const openingLogoTimeline = Gsap.timeline();

    if (openingLogo && openingAnimation && topLeftInner && topRight) {
      openingLogoTimeline.to(openingLogo, { autoAlpha: 1, duration: 0.5, delay: 0.5 });
      openingLogoTimeline.to(openingAnimation, { autoAlpha: 0, duration: 0.5, delay: 0.5 });
      openingLogoTimeline.to(topLeftInner, { y: '0%', autoAlpha: 1, duration: 0.5, delay: 0.5, ease: 'power4.out' });
      openingLogoTimeline.to(topRight, { autoAlpha: 1, duration: 1, delay: 0.5, ease: 'power4.out' }, '-=0.5');
    }
  })

  useEffect(() => {
    const contentsBox = document.getElementById('contentsBox');
    Gsap.set(contentsBox, { y: '30px', autoAlpha: 0 });

    ScrollTrigger.create({
      trigger: contentsBox,
      start: 'top center',
      end: 'center center',
      onEnter: () => {
        if (contentsBox) {
          Gsap.to(contentsBox, { autoAlpha: 1, duration: 0.5, delay: 0.2, ease: 'power4.out' });
        }
      },
    });
  });

  useEffect(() => {
    const swiperVisual = document.getElementById('swiperVisual');
    Gsap.set(swiperVisual, { autoAlpha: 0 });
    ScrollTrigger.create({
      trigger: swiperVisual,
      start: 'top center',
      end: 'center center',
      onEnter: () => {
        if (swiperVisual) {
          Gsap.to(swiperVisual, { autoAlpha: 1, duration: 0.5, ease: 'power4.out' });
        }
      },
    });
  });

  useEffect(() => {
    const videoContainer = document.getElementById('videoContainer');
    const leftDiv = document.getElementById('leftDiv');
    const rightDiv = document.getElementById('rightDiv');

    Gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoContainer,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          if (leftDiv && rightDiv) {
            Gsap.to(leftDiv, { width: 0, duration: 0.5 });
            Gsap.to(rightDiv, { width: 0, duration: 0.5 });
          }
        },
      },
    });

    if (videoRef.current) {
      videoRef.current?.play();
    }
  }, [videoRef]);

  useEffect(() => {
    const contact = document.getElementById('contact');
    Gsap.set(contact, { y: '30px', autoAlpha: 0 });

    ScrollTrigger.create({
      trigger: contact,
      start: 'top center',
      end: 'center center',
      onEnter: () => {
        if (contact) {
          Gsap.to(contact, { y: '0%', autoAlpha: 1, duration: 0.5, delay: 0.2, ease: 'power4.out' });
        }
      },
    });
  });

  return (
    <>
      <div id="openingAnimation" className={styles.openingAnimation}>
        <p id="openingLogo" className={styles.openingLogo}>NEXT TECH</p>
      </div>
      <section className={styles.topVisual}>
        <div className={styles.topLeft}>
          <div id="topLeftInner" className={styles.topLeftInner}>
            <a href="/" className={styles.logo}>Web Development</a>
            <p>Welcome to NEXT TECH.<br />Your gateway to cutting-edge tech solutions.</p>
          </div>
        </div>
        <div id="topRight" className={styles.topRight}>
          <Image src="/top-v.webp" alt="NEXT TECH" width={681} height={400} priority />
        </div>
      </section>
      <section id="videoContainer" className={styles.videoContainer}>
        <h2 className={styles.videoText}>
          Increasing Business Velocity <br />through Technology
        </h2>
        <div id="leftDiv" className={styles.leftDiv}></div>
        <div id="rightDiv" className={styles.rightDiv}></div>
        <video
          className={styles.video}
          ref={videoRef}
          loop
          muted
          poster="/poster.webp"
        >
          <source src={video_mp4} type="video/mp4" />
          <source src={video_webm} type="video/webm" />
        </video>
      </section>
      <section id="service">
        <div id="contentsBox" className={styles.contentsBox}>
          <Service />
        </div>
      </section>
      <section id="swiperVisual" className={styles.swiperVisual}>
        <div id="swiperVisualInner" className={styles.swiperVisualInner}>
          <SwiperBox />
          <h3>Would you like to try <br className={styles.spBr} />the latest technology?</h3>
        </div>
      </section>
      <section id="contact" className={styles.contact}>
        <h2>CONTACT</h2>
        <Contact />
      </section>
    </>
  )
}
