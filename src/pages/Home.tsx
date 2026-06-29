import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import ConcertSection from "../components/home/ConcertSection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <ConcertSection />
      <Footer />
    </div>
  );
}