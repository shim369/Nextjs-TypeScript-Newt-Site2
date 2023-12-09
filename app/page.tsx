"use client"
import React, { useRef, useEffect } from 'react'
import Gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import styles from './styles/page.module.scss'
import { SlideBox } from './components/SlideBox'
import { Contact } from './components/Contact'
import { Service } from './components/Service'

Gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const topLeftInnerRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const contentsBoxRef = useRef<HTMLDivElement>(null);
  const slideVisualRef = useRef<HTMLDivElement>(null);
  const leftDivRef = useRef<HTMLDivElement>(null);
  const rightDivRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const video_mp4 = '/video.mp4';
  const video_webm = '/video.webm';


  useEffect(() => {
    const topLeftInner = topLeftInnerRef.current;
    const topRight = topRightRef.current;
    Gsap.set(topLeftInner, { y: '30px', autoAlpha: 0 });
    Gsap.set(topRight, { autoAlpha: 0 });

    const TL = Gsap.timeline();

    TL.to(topLeftInner, { y: '0%', autoAlpha: 1, duration: 0.5, delay: 0.5, ease: 'power4.out' });
    TL.to(topRight, { autoAlpha: 1, duration: 1, delay: 0.5, ease: 'power4.out' }, '-=0.5');
  })

  useEffect(() => {
    const contentsBox = contentsBoxRef.current;
    Gsap.set(contentsBox, { y: '30px', autoAlpha: 0 });

    ScrollTrigger.create({
      trigger: contentsBox,
      start: 'top center',
      end: 'center center',
      onEnter: () => {
        if (contentsBox) {
          Gsap.to(contentsBox, { autoAlpha: 1, duration: 0.5, delay: 0.5, ease: 'power4.out' });
        }
      },
    });
  });

  useEffect(() => {
    const slideVisual = slideVisualRef.current;
    Gsap.set(slideVisual, { autoAlpha: 0 });
    ScrollTrigger.create({
      trigger: slideVisual,
      start: 'top center',
      end: 'center center',
      onEnter: () => {
        Gsap.to(slideVisual, { autoAlpha: 1, duration: 0.5, ease: 'power4.out' });
      },
    });
  });

  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    const leftDiv = leftDivRef.current;
    const rightDiv = rightDivRef.current;

    Gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoContainer,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          Gsap.to(leftDiv, { width: 0, duration: 0.5 });
          Gsap.to(rightDiv, { width: 0, duration: 0.5 });
        },
      },
    });
    videoRef.current?.play();
  }, [videoRef]);

  useEffect(() => {
    const contact = contactRef.current;
    Gsap.set(contact, { y: '30px', autoAlpha: 0 });

    ScrollTrigger.create({
      trigger: contact,
      start: 'top center',
      end: 'center center',
      onEnter: () => {
        Gsap.to(contact, { y: '0%', autoAlpha: 1, duration: 0.5, delay: 0.2, ease: 'power4.out' });
      },
    });
  });

  return (
    <>
      <section className={styles.topVisual}>
        <div className={styles.topLeft}>
          <div id="topLeftInner" className={styles.topLeftInner} ref={topLeftInnerRef}>
            <a href="/" className={styles.logo}>Web Development</a>
            <p>Welcome to NEXT TECH.<br />Your gateway to cutting-edge tech solutions.</p>
          </div>
        </div>
        <div id="topRight" className={styles.topRight} ref={topRightRef}>
          <Image src="/top-v.webp" alt="NEXT TECH" width={681} height={400} priority />
        </div>
      </section>
      <section id="videoContainer" className={styles.videoContainer} ref={videoContainerRef}>
        <h2 className={styles.videoText}>
          Increasing Business Velocity <br />through Technology
        </h2>
        <div id="leftDiv" className={styles.leftDiv} ref={leftDivRef}></div>
        <div id="rightDiv" className={styles.rightDiv} ref={rightDivRef}></div>
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
        <div id="contentsBox" className={styles.contentsBox} ref={contentsBoxRef}>
          <Service />
        </div>
      </section>
      <section id="slideVisual" className={styles.slideVisual} ref={slideVisualRef}>
        <div id="slideVisualInner" className={styles.slideVisualInner}>
          <SlideBox />
          <h3>Would you like to try <br className={styles.spBr} />the latest technology?</h3>
        </div>
      </section>
      <section id="contact" className={styles.contact} ref={contactRef}>
        <h2>CONTACT</h2>
        <Contact />
      </section>
    </>
  )
}
