"use client";

import BannerHome from "./components/BannerHome/BannerHome";
import BodyHome from "./components/BodyHome/BodyHome";
import ReviewHome from "./components/ReviewHome/ReviewHome";
import SliderHome from "./components/SliderHome/SliderHome";
import TravelHome from "./components/TravelHome/TravelHome";
import "./globals.css";

export default function Home() {
  return (
    <section className="Home">
      <BannerHome />
      <BodyHome />
      <TravelHome />
      <SliderHome/>
      <ReviewHome/>
    </section>
  );
}
