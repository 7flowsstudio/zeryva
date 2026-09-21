import Dylery from "@/components/Pages/Dylery/Dylery";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Дилери",
	description:
		"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв",

	alternates: {
		canonical: "https://zeryva.com.ua/dylery",
	},

	openGraph: {
		title: "Дилери",
		description:
			"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв",
		url: "https://zeryva.com.ua/dylery",
		type: "website",
		images: [
			{
				url: "/logo.svg",
				width: 504,
				height: 504,
				alt: "Дилери",
			},
		],
	},

	formatDetection: {
		telephone: false,
	},
};

const page = () => {
	return <Dylery />;
};

export default page;
