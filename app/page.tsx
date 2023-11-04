"use client"
import Link from 'next/link'
import Image from 'next/image'
import './styles/style.scss'
import SwiperBox from './components/SwiperBox'
import Contact from './components/Contact'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import video_mp4 from './assets/video.mp4'
import video_webm from './assets/video.webm'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const openingLogo = document.querySelector('.opening-logo');
    const openingAnimation = document.querySelector('.opening-animation');
    const topLeftInner = document.querySelector('.top-left-inner');
    const topRight = document.querySelector('.top-right');
    const leftDiv = document.querySelector('.left-div');
    const rightDiv = document.querySelector('.right-div');
    const h2 = document.querySelector('.video-container h2');
    const contentsBox = document.querySelector('.contents-box');
    const swiperVisual = document.querySelector('.swiper-visual');
    const contact = document.querySelector('.contact');
  
    gsap.set(openingLogo, { autoAlpha: 0 });
    gsap.set(topLeftInner, { y: '30px', autoAlpha: 0 });
    gsap.set(topRight, { autoAlpha: 0 });
    gsap.set(contentsBox, { y: '30px', autoAlpha: 0 });
    gsap.set(swiperVisual, { autoAlpha: 0 });
    gsap.set(contact, { y: '30px', autoAlpha: 0 });
  
    const openingLogoTimeline = gsap.timeline();
  
    openingLogoTimeline.to(openingLogo, { autoAlpha: 1, duration: 0.5, delay: 0.5 });
    openingLogoTimeline.call(() => {
      gsap.to(openingAnimation, { autoAlpha: 0, duration: 0.5, delay: 1 });
    });
  
    openingLogoTimeline.to(topLeftInner, { y: '0%', autoAlpha: 1, duration: 0.5, delay: 1, ease: 'power4.out' });
    openingLogoTimeline.to(topRight, { autoAlpha: 1, duration: 1, delay: 0.5, ease: 'power4.out' }, '-=0.5');
  
    ScrollTrigger.create({
      trigger: '.video-container',
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        gsap.to(leftDiv, { width: 0, duration: 0.5 });
        gsap.to(rightDiv, { width: 0, duration: 0.5 });
        gsap.to(h2, { autoAlpha: 1, duration: 0, delay: 0.5 });
      },
      onEnterBack: () => {
        gsap.to(leftDiv, { width: 0, duration: 0.5 });
        gsap.to(rightDiv, { width: 0, duration: 0.5 });
        gsap.to(h2, { autoAlpha: 1, duration: 0, delay: 0.5 });
      },
      onLeave: () => {
        gsap.to(leftDiv, { width: '50%', duration: 0.5 });
        gsap.to(rightDiv, { width: '50%', duration: 0.5 });
        gsap.to(h2, { autoAlpha: 0, duration: 0, delay: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(leftDiv, { width: '50%', duration: 0.5 });
        gsap.to(rightDiv, { width: '50%', duration: 0.5 });
        gsap.to(h2, { autoAlpha: 0, duration: 0, delay: 0.5 });
      },
    });

      ScrollTrigger.create({
        trigger: contentsBox,
        start: 'top center', 
        end: 'center center',
        onEnter: () => {
          gsap.to(contentsBox, { autoAlpha: 1, duration: 0.5, delay: 0.2, ease: 'power4.out' });
        },
    });
    
    ScrollTrigger.create({
      trigger: '.swiper-visual',
      start: 'top center',
      end: 'center center',
      onEnter: () => {
        gsap.to(swiperVisual, { autoAlpha: 1, duration: 0.5, ease: 'power4.out' });
      },
    });
  
    ScrollTrigger.create({
      trigger: contact,
      start: 'top center',
      end: 'center center',
      onEnter: () => {
        gsap.to(contact, { y: '0%', autoAlpha: 1, duration: 0.5, delay: 0.2, ease: 'power4.out' });
      },
    });
    if (videoRef.current) {
      videoRef.current?.play();
    }
  
  }, [videoRef]);

  return (
    <>
      <div className={'opening-animation'}>
        <p className={'opening-logo'}>NEXT TECH</p>
      </div>
      <section className={'top-visual'}>
        <div className={'top-left'}>
          <div className={'top-left-inner'}>
            <a href="/" className={'logo'}>Web Development</a>
            <p>Welcome to NEXT TECH.<br />Your gateway to cutting-edge tech solutions.</p>
          </div>
        </div>
        <div className={'top-right'}>
            <Image src="/top-v.webp" alt="NEXT TECH" width={681} height={400} priority />
        </div>
      </section>
      <section className={'video-container'}>
        <div className="left-div"></div>
        <div className="right-div"></div>
        <h2>
          Increasing Business Velocity <br />through Technology
        </h2>
        <video
          className={'video'}
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
          <div className={'contents-box'}>
            <div className={'contets-item'}>
              <div className={'contets-item-inner'}>
              <h2>ABOUT</h2>
              <p>I established this business in 2023 with a mission to leverage technology and accelerate businesses. I am committed to supporting your business success with my experience and skills.</p>
              <Link href="/about" className={'link-btn'}>Show Detail</Link>
              </div>
            </div>
            <div className={'contets-item'}>
              <div className={'contets-item-inner'}>
              <h2>SERVICE</h2>
              <p>I provide tailor-made web solutions for your business, utilizing HTML, CSS, JavaScript, Python, and more. From online shops to corporate websites, I cater to a wide range of needs.</p>
              <Link href="/service" className={'link-btn'}>Show Detail</Link>
              </div>
            </div>
            <div className={'contets-item'}>
              <div className={'contets-item-inner'}>
              <h2>BLOG</h2>
              <p>I regularly publish articles covering a wide range of topics, from the latest technology trends to programming tutorials and up-to-date information. It&apos;s a reliable source to stay informed about the latest industry trends.</p>
              <Link href="/blog" className={'link-btn'}>Show Detail</Link>
              </div>
            </div>
            <div className={'contets-item'}>
              <div className={'contets-item-inner'}>
              <h2>FAQ</h2>
              <p>From pricing and post-development support to the technologies I use, I have compiled frequently asked questions and their answers in one place. If you have any uncertainties or questions, this section might provide quick solutions.</p>
              <Link href="/faq" className={'link-btn'}>Show Detail</Link>
              </div>
            </div>
          </div>
      </section>
      <section id="home" className={'swiper-visual'}>
          <div className={'swiper-visual-inner'}>
            <SwiperBox />
            <h3>Would you like to try the latest technology?</h3>
          </div>
      </section>
      <section className={'contact'}>
        <h2>CONTACT</h2>
        <Contact />
      </section>
    </>
  )
}
