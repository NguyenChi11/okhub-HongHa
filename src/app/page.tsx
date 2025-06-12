import BannerHome from "./components/BannerHome/BannerHome";
import BodyHome from "./components/BodyHome/BodyHome";
import "./globals.css"

export default function Home() {
  return (
    <section className="Home">
      <BannerHome/>
      <BodyHome/>
    </section>
  );
}
