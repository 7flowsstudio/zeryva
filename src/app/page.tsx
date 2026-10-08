"use client";
import Categories from "@/components/Sections/Categories/Categories";
import Delivery from "@/components/Sections/Delivery/Delivery";
import Hero from "@/components/Sections/Hero/Hero";
import Reviews from "@/components/Sections/Reviews/Reviews";
import Unique from "@/components/Sections/Unique/Unique";
import dynamic from "next/dynamic";

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
