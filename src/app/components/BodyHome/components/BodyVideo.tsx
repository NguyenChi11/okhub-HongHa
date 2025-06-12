"use client";
import { assets } from "@/app/public/assets/data/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./custom.module.css";

gsap.registerPlugin(ScrollTrigger);

const BodyVideo = () => {
  const imgRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // Desktop
      "(min-width: 640px)": function () {
        const trigger = ScrollTrigger.create({
          trigger: imgRef.current,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            setIsFixed(true);
            gsap.to(imgRef.current, {
              width: "100rem",
              height: "48.75rem",
              left: 0,
              top: 0,
              borderRadius: "1rem",
              duration: 1,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            setIsFixed(false);
            gsap.to(imgRef.current, {
              width: "52rem",
              height: "29.8125rem",
              top: "0",
              left: "5vw",
              borderRadius: "1rem",
              duration: 1,
              ease: "power2.inOut",
            });
          },
        });

        return () => trigger.kill();
      },

      // Mobile
      "(max-width: 640px)": function () {
        const trigger = ScrollTrigger.create({
          trigger: imgRef.current,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            setIsFixed(true);
            gsap.to(imgRef.current, {
              width: "40rem",
              height: "25.85rem",
              left: 0,
              top: 0,
              borderRadius: "1rem",
              duration: 1,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            setIsFixed(false);
            gsap.to(imgRef.current, {
              width: "23.5rem",
              height: "13.125rem",
              top: "0",
              left: "5vw",
              borderRadius: "1rem",
              duration: 1,
              ease: "power2.inOut",
            });
          },
        });

        return () => trigger.kill();
      },
    });
  }, []);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loaded) {
          imgRef.current.src =
            "https://www.youtube.com/embed/K4j4FR5tUtU?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=K4j4FR5tUtU";
          setLoaded(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loaded]);

  return (
    <div className={`${styles.containerVideo}`}>
      <div className={`${styles.containerTextVideo}`}>
        <p className={`${styles.videoText}`}>WELCOME TO</p>
        <h2 className={`${styles.videoTitle}`}>HA GIANG NATURALLY</h2>
        <Image
          className={`${styles.videoImgTitle}`}
          src={assets.Beautiful}
          alt=""
        />
      </div>
      <iframe
        ref={imgRef}
        frameBorder="0"
        className={`${styles.videoIframe} ${isFixed ? "" : ""}`}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default BodyVideo;
