"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./BannerHome.module.css";
import { option_days, option_type_tour } from "../../public/assets/data/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const BannerHome = () => {
  const [selectedDay, setSelectedDay] = useState("5 days 4 night");
  const [selectedTypeTour, setSelectedTypeTour] = useState("Best Budget");
  const [openDay, setOpenDay] = useState(false);
  const [openTypeTour, setOpenTypeTour] = useState(false);
  const [paxSelf, setPaxSelf] = useState(5);
  const [paxPrivate, setPaxPrivate] = useState(5);
  const dropdownRefDay = useRef<HTMLDivElement>(null);
  const dropdownRefTypeTour = useRef<HTMLDivElement>(null);

  const toggleDropdownDay = () => setOpenDay(!openDay);
  const toggleDropdownTypeTour = () => setOpenTypeTour(!openTypeTour);

  const handleSelect = (value: string) => {
    setSelectedDay(value);
    setOpenDay(false);
  };

  const handleSelectTypeTour = (value: string) => {
    setSelectedTypeTour(value);
    setOpenTypeTour(false);
  };

  useEffect(() => {
    const handleClickOutsideDay = (e: MouseEvent) => {
      if (
        dropdownRefDay.current &&
        !dropdownRefDay.current.contains(e.target as Node)
      ) {
        setOpenDay(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideDay);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideDay);
  }, []);

  useEffect(() => {
    const handleClickOutsideTypeTour = (e: MouseEvent) => {
      if (
        dropdownRefTypeTour.current &&
        !dropdownRefTypeTour.current.contains(e.target as Node)
      ) {
        setOpenTypeTour(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideTypeTour);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideTypeTour);
  }, []);

  const incrementSelf = () => setPaxSelf((prev) => prev + 1);
  const decrementSelf = () => setPaxSelf((prev) => Math.max(1, prev - 1));

  const incrementPrivate = () => setPaxPrivate((prev) => prev + 1);
  const decrementPrivate = () => setPaxPrivate((prev) => Math.max(1, prev - 1));
  return (
    <div className={`${styles.banner} `}>
      <div className="sm:inline-flex sm:flex-col sm:items-center sm:gap-[0.75rem] sm:absolute sm:top-[17.75rem] sm:left-[27.5rem] hidden">
        <p className="text-[#fff] text-[1.125rem] font-extrabold leading-[100%] opacity-40">
          GET READY
        </p>
        <h1 className="text-center text-[6rem] font-black leading-[100%] w-[44.125rem] bg-gradient-to-b from-white to-[rgba(255,255,255,0)] bg-clip-text text-transparent">
          DISCOVER
        </h1>
        <h1 className="text-center text-[6rem] font-black leading-[100%] w-[44.125rem] bg-gradient-to-b from-white to-[rgba(255,255,255,0)] bg-clip-text text-transparent">
          HA GIANG LOOP
        </h1>
      </div>
      <div className="sm:flex items-center justify-center absolute bottom-[1.94rem] left-[22.44rem] p-[0.75rem_0.75rem_0.75rem_2rem] gap-[1.875rem] rounded-[0.75rem] bg-[#fff] hidden">
        <div className="flex items-center gap-[1.5rem]">
          <div
            className="flex flex-col items-start gap-1 w-[10rem]"
            ref={dropdownRefDay}
          >
            <p className="text-[#727272] text-[0.75rem] font-normal leading-[120%] tracking-[0.00375rem]">
              DAYS
            </p>
            <div
              className="flex justify-between items-center self-stretch w-auto text-[#2E2E2E] text-base font-extrabold leading-[150%]"
              onClick={toggleDropdownDay}
            >
              <span>{selectedDay}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="flex w-4 h-4 text-[0.8rem] px-[0.25rem] py-[0.13794rem] pl-[0.29331rem] justify-center items-center font-black"
              />
            </div>
            {openDay && (
              <div className="absolute top-[6.3rem] left-0 w-full border border-[#ccc] rounded-[6px] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] z-[100] gap-4 max-h-[200px] overflow-y-auto py-4 pl-4 text-[#2E2E2E] cursor-pointer">
                {option_days.map((opt) => (
                  <div
                    key={opt}
                    className="option"
                    onClick={() => handleSelect(opt)}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span className="bannerTab-line"></span>
          <div className="flex flex-col items-start gap-1 w-[8.5rem]">
            <p
              className="text-[#727272] text-[0.75rem] font-normal leading-[120%] tracking-[0.00375rem]"
              ref={dropdownRefTypeTour}
            >
              TYPE OF TOUR
            </p>
            <div
              className="flex justify-between items-center self-stretch w-auto text-[#2E2E2E] text-base font-extrabold leading-[150%]"
              onClick={toggleDropdownTypeTour}
            >
              <span>{selectedTypeTour}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="flex w-4 h-4 text-[0.8rem] px-[0.25rem] py-[0.13794rem] pl-[0.29331rem] justify-center items-center font-black"
              />
            </div>
            {openTypeTour && (
              <div className="absolute top-[6.3rem] left-0 w-full border border-[#ccc] rounded-[6px] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] z-[100] gap-4 max-h-[200px] overflow-y-auto py-4 pl-4 text-[#2E2E2E] cursor-pointer">
                {option_type_tour.map((opt) => (
                  <div
                    key={opt}
                    className="option"
                    onClick={() => handleSelectTypeTour(opt)}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span className="bannerTab-line"></span>
          <div className="flex flex-col items-start gap-1 w-[7.5rem]">
            <p className="text-[#727272] text-[0.75rem] font-normal leading-[120%] tracking-[0.00375rem]">
              SELF DRIVING
            </p>
            <div className="flex justify-between items-center self-stretch w-auto text-[#2E2E2E] text-base font-extrabold leading-[150%]">
              <div>
                <strong>{paxSelf}</strong> pax
              </div>
              <div className="flex flex-col items-start">
                <div
                  className="w-[0.45669rem] h-[0.72406rem]"
                  onClick={incrementSelf}
                >
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="flex w-4 h-4 text-[0.8rem] px-[0.25rem] py-[0.13794rem] pl-[0.29331rem] justify-center items-center font-black"
                  />
                </div>
                <div
                  className="w-[0.45669rem] h-[0.72406rem]"
                  onClick={decrementSelf}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="flex w-4 h-4 text-[0.8rem] px-[0.25rem] py-[0.13794rem] pl-[0.29331rem] justify-center items-center font-black"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 w-[7.5rem]">
            <p className="text-[#727272] text-[0.75rem] font-normal leading-[120%] tracking-[0.00375rem]">
              PRIVATE DRIVING
            </p>
            <div className="flex justify-between items-center self-stretch w-auto text-[#2E2E2E] text-base font-extrabold leading-[150%]">
              <div className="banner-private-pax-value">
                <strong>{paxPrivate}</strong> pax
              </div>
              <div className="flex flex-col items-start">
                <div
                  className="w-[0.45669rem] h-[0.72406rem]"
                  onClick={incrementPrivate}
                >
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="flex w-4 h-4 text-[0.8rem] px-[0.25rem] py-[0.13794rem] pl-[0.29331rem] justify-center items-center font-black"
                  />
                </div>
                <div
                  className="w-[0.45669rem] h-[0.72406rem]"
                  onClick={decrementPrivate}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="flex w-4 h-4 text-[0.8rem] px-[0.25rem] py-[0.13794rem] pl-[0.29331rem] justify-center items-center font-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="flex flex-col justify-center items-center gap-1 px-6 py-3 rounded-md bg-[#E64827] border-none cursor-pointer">
          <div className="text-[#fff] text-center font-['Trips Sans'] text-[1.75rem] font-black leading-[120%]">
            $299
          </div>
          <div className="text-[#fff] text-center font-['Trips_Sans'] text-[0.875rem] font-extrabold leading-[120%] tracking-[0.00875rem]">
            BOOK NOW
          </div>
        </button>
      </div>
    </div>
  );
};

export default BannerHome;
