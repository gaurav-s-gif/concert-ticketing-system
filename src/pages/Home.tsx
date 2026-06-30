import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import ConcertSection from "../components/home/ConcertSection";
import WhyChoose from "../components/home/WhyChoose";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <ConcertSection />

      <WhyChoose />

      <Testimonials />

      <Newsletter />

      <Footer />
    </>
  );
}