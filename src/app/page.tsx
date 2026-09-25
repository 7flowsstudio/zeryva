"use client";
import Categories from "@/components/Sections/Categories/Categories";
import Delivery from "@/components/Sections/Delivery/Delivery";
// import Gallery from "@/components/Sections/Gallery/Gallery";
// import dynamic from "next/dynamic";

import Hero from "@/components/Sections/Hero/Hero";
import Reviews from "@/components/Sections/Reviews/Reviews";
import Unique from "@/components/Sections/Unique/Unique";
import dynamic from "next/dynamic";
// import Call from "@/components/Sections/Call/Call";
// import About from "@/components/Sections/About/About";
// import Bestsellers from "@/components/Sections/Bestsellers/Bestsellers";
// const Hero = dynamic(() => import("@/components/Sections/Hero/Hero"), {
// 	ssr: false,
// });
const About = dynamic(() => import("@/components/Sections/About/About"), {
	ssr: false,
});
const Bestsellers = dynamic(
	() => import("@/components/Sections/Bestsellers/Bestsellers"),
	{
		ssr: false,
	},
);
const Call = dynamic(() => import("@/components/Sections/Call/Call"), {
	ssr: false,
});

const Gallery = dynamic(() => import("@/components/Sections/Gallery/Gallery"), {
	ssr: false,
});

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Unique />
			<Categories />
			<Reviews />
			<Delivery />
			<Bestsellers />
			<Gallery />
			<Call />
		</>
	);
}
