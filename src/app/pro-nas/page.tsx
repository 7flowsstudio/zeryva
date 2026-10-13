import React from "react";
import About from "@/components/Pages/About/About";
import { Metadata } from "next";

const pageTitle = "Про нас | Zeryva";

const pageDescription =
	"Дізнайтеся більше про компанію Zeryva: нашу історію, цінності, сучасні технології та інноваційні біопрепарати для підвищення врожайності.";

export const metadata: Metadata = {
	title: "Про нас",
	description: pageDescription,

	alternates: {
		canonical: "https://zeryva.com.ua/pro-nas",
	},

	openGraph: {
		title: pageTitle,
		description: pageDescription,
		url: "https://zeryva.com.ua/pro-nas",
		type: "website",
		images: [
			{
				url: "/logo.svg",
				alt: "Zeryva — Про нас",
			},
		],
	},

	formatDetection: {
		telephone: false,
	},
};

const aboutPageSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "AboutPage",
			"@id": "https://zeryva.com.ua/pro-nas#webpage",
			url: "https://zeryva.com.ua/pro-nas",
			name: pageTitle,
			description: pageDescription,
			knowsAbout: [
				"виробництво біопрепаратів",
				"агрономічний супровід",
				"біотехнологічні розробки",
				"захист рослин",
				"відновлення родючості ґрунтів",
				"біологічні системи живлення",
				"підвищення продуктивності посівів",
			],
			isPartOf: {
				"@id": "https://zeryva.com.ua/#website",
			},
			publisher: {
				"@id": "https://zeryva.com.ua/#organization",
			},
			about: {
				"@id": "https://zeryva.com.ua/#organization",
			},
			breadcrumb: {
				"@id": "https://zeryva.com.ua/pro-nas#breadcrumb",
			},
			inLanguage: "uk-UA",
		},
		{
			"@type": "BreadcrumbList",
			"@id": "https://zeryva.com.ua/pro-nas#breadcrumb",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Головна",
					item: "https://zeryva.com.ua/",
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Про нас",
					item: "https://zeryva.com.ua/pro-nas",
				},
			],
		},
	],
};

const Page = () => {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(aboutPageSchema).replace(/</g, "\\u003c"),
				}}
			/>
			<About />
		</>
	);
};

export default Page;
