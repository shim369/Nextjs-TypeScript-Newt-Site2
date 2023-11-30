"use client"
import React, { useRef, useEffect } from 'react'
import Gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link'
import Image from 'next/image'
import './styles/css/layout.css'
import SwiperBox from './components/SwiperBox'
import Contact from './components/Contact'
import video_mp4 from './assets/video.mp4'
import video_webm from './assets/video.webm'

Gsap.registerPlugin(ScrollTrigger);
// Gsap.config({
//   nullTargetWarn: false,
// });

export default function Home() {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    Gsap.set('.openingLogo', { autoAlpha: 0 });
    Gsap.set('.topLeftInner', { y: '30px', autoAlpha: 0 });
    Gsap.set('.topRight', { autoAlpha: 0 });

    const openingLogoTimeline = Gsap.timeline();
  
    openingLogoTimeline.to('.openingLogo', { autoAlpha: 1, duration: 0.5, delay: 0.5 });
    openingLogoTimeline.to('.openingAnimation', { autoAlpha: 0, duration: 0.5, delay: 1 });
    openingLogoTimeline.to('.topLeftInner', { y: '0%', autoAlpha: 1, duration: 0.5, delay: 1, ease: 'power4.out' });
    openingLogoTimeline.to('.topRight', { autoAlpha: 1, duration: 1, delay: 0.5, ease: 'power4.out' }, '-=0.5');
  })

  useEffect(() => {
    Gsap.set('.contentsBox', { y: '30px', autoAlpha: 0 });
    Gsap.set('.swiperVisual', { autoAlpha: 0 });
    Gsap.set('.contact', { y: '30px', autoAlpha: 0 });
  
    Gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: '.videoContainer',
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          Gsap.to('.leftDiv', { width: 0, duration: 0.5 });
          Gsap.to('.rightDiv', { width: 0, duration: 0.5 });
        },
      },
    });

    ScrollTrigger.create({
        trigger: '.contentsBox',
        start: 'top center', 
        end: 'center center',
        onEnter: () => {
          Gsap.to('.contentsBox', { autoAlpha: 1, duration: 0.5, delay: 0.2, ease: 'power4.out' });
        },
    });
    
    ScrollTrigger.create({
      trigger: '.swiperVisual',
      start: 'top center',
      end: 'center center',
      onEnter: () => {
        Gsap.to('.swiperVisual', { autoAlpha: 1, duration: 0.5, ease: 'power4.out' });
      },
    });
  
    ScrollTrigger.create({
      trigger: '.contact',
      start: 'top center',
      end: 'center center',
      onEnter: () => {
        Gsap.to('.contact', { y: '0%', autoAlpha: 1, duration: 0.5, delay: 0.2, ease: 'power4.out' });
      },
    });
    if (videoRef.current) {
      videoRef.current?.play();
    }
  
  }, [videoRef]);

  return (
    <>
      <div className='openingAnimation'>
        <p className='openingLogo'>NEXT TECH</p>
      </div>
      <section className='topVisual'>
        <div className='topLeft'>
          <div className='topLeftInner'>
            <a href="/" className='logo'>Web Development</a>
            <p>Welcome to NEXT TECH.<br />Your gateway to cutting-edge tech solutions.</p>
          </div>
        </div>
        <div className='topRight'>
            <Image src="/top-v.webp" alt="NEXT TECH" width={681} height={400} priority />
        </div>
      </section>
      <section className='videoContainer'>
        <h2 className='videoText'>
          Increasing Business Velocity <br />through Technology
        </h2>
        <div className='leftDiv'></div>
        <div className='rightDiv'></div>
        <video
          className='video'
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
          <div className='contentsBox'>
            <div className='contentsItem'>
              <div className='contentsItemInner'>
              <h2>ABOUT</h2>
              <p>I established this business in 2023 with a mission to leverage technology and accelerate businesses. I am committed to supporting your business success with my experience and skills.</p>
              <Link href="/about" className='linkBtn'>Show Detail</Link>
              </div>
            </div>
            <div className='contentsItem'>
              <div className='contentsItemInner'>
              <h2>SERVICE</h2>
              <p>I provide tailor-made web solutions for your business, utilizing HTML, CSS, JavaScript, Python, and more. From online shops to corporate websites, I cater to a wide range of needs.</p>
              <Link href="/service" className='linkBtn'>Show Detail</Link>
              </div>
            </div>
            <div className='contentsItem'>
              <div className='contentsItemInner'>
              <h2>BLOG</h2>
              <p>I regularly publish articles covering a wide range of topics, from the latest technology trends to programming tutorials and up-to-date information. It&apos;s a reliable source to stay informed about the latest industry trends.</p>
              <Link href="/blog" className='linkBtn'>Show Detail</Link>
              </div>
            </div>
            <div className='contentsItem'>
              <div className='contentsItemInner'>
              <h2>FAQ</h2>
              <p>From pricing and post-development support to the technologies I use, I have compiled frequently asked questions and their answers in one place. If you have any uncertainties or questions, this section might provide quick solutions.</p>
              <Link href="/faq" className='linkBtn'>Show Detail</Link>
              </div>
            </div>
          </div>
      </section>
      <section id="home" className='swiperVisual'>
          <div className='swiperVisualInner'>
            <SwiperBox />
            <h3>Would you like to try <br className='spBr' />the latest technology?</h3>
          </div>
      </section>
      <section className='contact'>
        <h2>CONTACT</h2>
        <Contact />
      </section>
    </>
  )
}
