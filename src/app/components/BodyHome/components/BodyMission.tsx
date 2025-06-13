"use client";

import { assets } from "@/app/public/assets/data/assets";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import styles from "./custom.module.css"

type BodyMissionProps = {
  title: string;
  text: string;
  description: string;
};

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const BodyMission = ({ text, title, description }: BodyMissionProps) => {

    const pathRef = useRef<SVGPathElement | null>(null);
    const iconRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
      const path = pathRef.current!;
      const icon = iconRef.current;
      const length = path.getTotalLength();

      // 1. Vẽ đường trước
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: path,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
      });

      // 2. Sau 2s, chạy icon theo đường path
      tl.to(
        icon,
        {
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
          duration: 4,
          ease: "power1.inOut",
        },
        "+=0.2"
      ); // chờ 0.2s sau khi vẽ xong
    }, []);

    useEffect(() => {
      gsap.fromTo(
        imageRef.current,
        { x: "100vw", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, []);
  const data_title = [
    { title: "Tours accommodate a maximum of 10 guests" },
    { title: "Flexible cancellation policy" },
    { title: "Book now, pay later" },
    { title: "Fluent English-speaking guides" },
    { title: "Creating job opportunities for the Vietnamese community" },
  ];
  return (
    <div className="flex sm:w-[100rem] w-[40rem] justify-between flex-shrink-0 relative overflow-x-clip">
      <div className=" w-[40rem] sm:w-full sm:ml-[6.75rem] sm:mt-[3.44rem] mt-[1.8rem] ml-[1rem] mr-[1rem]">
        <p className="sm:hidden block text-[#fff] text-[0.875rem] not-italic font-extrabold leading-[120%] tracking-[0.00875rem] opacity-40 mb-[0.81rem]">
          {text}
        </p>
        <h1 className="text-white font-['Londrina_Solid'] sm:text-[3.5rem] font-black leading-[100%] mt-[1.88rem]  sm:w-full w-[29rem] text-[4rem]">
          {title}
        </h1>
        <p className=" w-[38.8125rem]   sm:h-[4.5rem] h-[6.5625rem]  text-[#c5c5c5] text-base font-normal leading-[1.5rem] tracking-[0.005rem] sm:mt-[3.5rem] mt-[1.875rem] ">
          {description}
        </p>
        <div className="mt-4 flex flex-col items-start gap-3">
          {data_title.map((item, index) => (
            <div key={index} className="flex gap-3">
              <Image className="w-4 h-4" src={assets.Tick} alt="" />
              <p className="text-[0.875rem] font-bold leading-[1.05rem] ml-0">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex mt-8 gap-4 text-center items-center justify-center sm:justify-self-start">
          <button className="flex h-14 sm:px-8 px-26 py-4 justify-center items-center gap-2 rounded-lg border border-[#da4b19] bg-[#da4b19] text-white text-center text-sm font-bold leading-[120%] uppercase">
            NOW BOOK <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <button className="flex h-14 sm:px-8 px-26 py-4  justify-center items-center gap-2 rounded-lg border border-white bg-transparent text-white text-center text-sm font-bold leading-[120%] uppercase">
            ALL TOUR <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div
        className={`sm:block hidden absolute top-6 left-[49.875rem] ${styles.svg}`}
      >
        <svg
          className="w-50 h-[40rem] overflow-visible "
          viewBox="0 0 100 750"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M12.1582 1.89551C9.56033 24.1217 1.63281 54.4379 1.63281 76.8445C1.63281 94.6201 5.52653 113.236 2.49001 130.848C-1.15298 151.977 12.7991 186.622 24.8723 203.614C41.5076 227.027 56.6881 254.78 62.9698 283.047C67.5053 303.457 66.8678 323.635 63.7318 344.194C62.2826 353.694 63.8138 363.39 62.3031 372.957C60.6279 383.567 58.2166 394.057 56.1123 404.578C52.6306 421.987 46.8569 437.015 36.7778 451.915C29.2215 463.085 23.0426 472.206 22.1102 485.726C20.9194 502.992 12.5121 520.164 9.34756 537.253C6.60436 552.066 10.2048 566.045 10.2048 580.684C10.2048 603.727 8.36815 626.026 14.9669 648.022C21.4484 669.626 13.2051 691.359 15.3479 712.787"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />

          <image
            className="w-[8.78538rem] h-[7.5rem] -rotate-[61.927]"
            ref={iconRef}
            href={`${assets.motobike.src}`}
          />
        </svg>
      </div>
      <div
        ref={imageRef}
        className="sm:block hidden mt-8 w-[57.5625rem] h-[31.375rem] flex-shrink-0 absolute right-[-20.25rem] top-4"
      >
        <Image
          className="flex-shrink-0 w-full h-auto"
          src={assets.image_mission}
          alt=""
        />
      </div>
    </div>
  );
};

export default BodyMission;
