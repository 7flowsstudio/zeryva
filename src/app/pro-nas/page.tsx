import React from "react";
import About from "@/components/Pages/About/About";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Про нас",
	description:
		"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв",

	alternates: {
		canonical: "https://zeryva.com.ua/pro-nas",
	},

	openGraph: {
		title: "Про нас",
		description:
			"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв",
		url: "https://zeryva.com.ua/pro-nas",
		type: "website",
		images: [
			{
				url: "/logo.svg",
				width: 504,
				height: 504,
				alt: "Про нас",
			},
		],
	},

	formatDetection: {
		telephone: false,
	},
};

const Page = () => {
	return (
		<>
			<About />
		</>
	);
};

export default Page;
