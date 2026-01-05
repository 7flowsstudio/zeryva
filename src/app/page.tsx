import Call from "@/components/Sections/Call/Call";
import About from "@/components/Sections/About/About";
import Hero from "@/components/Sections/Hero/Hero";
import Bestsellers from "@/components/Sections/Bestsellers/Bestsellers";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Bestsellers />
      <Call />
    </>
  );
}
