"use client";
import React, { useEffect, useState } from "react";
import { assets } from "@/app/public/assets/data/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false); // Cuộn xuống -> ẩn
      } else {
        setShow(true); // Cuộn lên -> hiện
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 60) {
        setShow(true); // Di chuột gần đầu trang -> hiện lại
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <div className={`${styles.header}  `}>
      <div
        className={`${styles.width} flex items-center justify-between ${
          show ? "" : `${styles.hide}`
        }`}
      >
        <Image
          className="sm:w-[9.625rem] sm:h-[3.1875rem] sm:ml-20 sm:mt-6 w-[7.1875rem] h-[2.5625rem] ml-[1.22rem] mt-[2.62rem]"
          src={assets.Logo}
          alt=""
        />
        <div className="flex items-center justify-center sm:mr-20 sm:mt-6 sm:gap-[0.4375rem] rounded-[1.5rem] sm:bg-[#e64827] p-[0.5rem_1rem_0.5rem_0.5rem] mr-[1.25rem] mt-[2.62rem] border border-white bg-transparent">
          <FontAwesomeIcon
            icon={faBars}
            className="w-[2.0625rem] h-[2.0625rem] "
          />
          <p className="text-[var(--greyscaletext-0)] text-center p-[0.28rem_0] text-[1.25rem] font-extrabold leading-[120%]">
            MENU
          </p>
        </div>
      </div>
      <div className="w-[3.125rem] fixed flex flex-col items-center justify-center gap-4 z-[1001] sm:left-[90rem] sm:bottom-[10.125rem] left-[35.18rem] bottom-[4rem] ">
        <div className="w-[3.125rem] h-[3.125rem] shrink-0 bg-[#e64827] rounded-full flex items-center justify-center ">
          <p className="text-[var(--Gray-Scale-0)] text-center text-[0.625rem] font-black leading-[0.8125rem] tracking-[0.03125rem] ">
            BOOK NOW
          </p>
        </div>
        <div className="w-[3.125rem] h-[3.125rem]">
          <Image
            className="w-[3.125rem] h-[3.125rem]"
            src={assets.Icon_1}
            alt=""
          />
        </div>
        <div className="w-[3.125rem] h-[3.125rem]">
          <Image
            className="w-[3.125rem] h-[3.125rem]"
            src={assets.Icon_2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
