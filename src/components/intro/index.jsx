'use client'
import Image from 'next/image'
import React, { useRef, useLayoutEffect } from 'react'
import styles from './style.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Intro = () => {

  const backgroundImage = useRef(null);
  const introImage = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },

    })

    timeline
      .from(backgroundImage.current, { clipPath: `inset(15%)` })
      .to(introImage.current, { height: "200px" }, 0)
  }, [])

  return (
    <div className={styles.intro}>
      <div className={styles.backgroundImage} ref={backgroundImage}>
        <Image src={"/images/background.jpeg"} alt="image" fill priority={true} />
      </div>
      <div className={styles.introContainer}>
        <div ref={introImage} data-scroll data-scroll-speed="0.2" className={styles.introImage}>
          <Image src={"/images/intro.png"} alt="image" fill priority={true}  />
        </div>  
        <h1 data-scroll data-scroll-speed="0.5">Smooth Scroll</h1>
      </div>
    </div>
  )
}

export default Intro