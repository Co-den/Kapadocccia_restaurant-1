import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SignatureDishes from "@/components/sections/SignatureDishes";
import Experience from "@/components/sections/Experience";
import Statistics from "@/components/sections/Statistics";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import ReservationCTA from "@/components/sections/ReservationCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <Experience />
        <Statistics />
        <Gallery />
        <Testimonials />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
