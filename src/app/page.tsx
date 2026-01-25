"use client";
import dynamic from "next/dynamic";
const Call = dynamic(() => import("@/components/Sections/Call/Call"), {
  ssr: false,
});
// import Call from "@/components/Sections/Call/Call";
// import About from "@/components/Sections/About/About";
const About = dynamic(() => import("@/components/Sections/About/About"), {
  ssr: false,
});
import Hero from "@/components/Sections/Hero/Hero";
// const Hero = dynamic(() => import("@/components/Sections/Hero/Hero"), {
//   ssr: false,
// });
const Bestsellers = dynamic(
  () => import("@/components/Sections/Bestsellers/Bestsellers"),
  {
    ssr: false,
  },
);
// import Bestsellers from "@/components/Sections/Bestsellers/Bestsellers";

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
