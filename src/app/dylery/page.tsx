import Dylery from "@/components/Pages/Dylery/Dylery";
import { Metadata } from "next";
import React from "react";

const pageTitle = "Дилери | Zeryva";

const pageDescription =
	"Знайдіть офіційних дилерів Zeryva у своєму регіоні. Контактна інформація, телефони, адреси та вебсайти партнерів для придбання продукції.";

export const metadata: Metadata = {
	title: "Дилери",
	description: pageDescription,

	alternates: {
		canonical: "https://zeryva.com.ua/dylery",
	},

	openGraph: {
		title: pageTitle,
		description: pageDescription,
		url: "https://zeryva.com.ua/dylery",
		type: "website",
		images: [
			{
				url: "/logo.svg",
				width: 504,
				height: 504,
				alt: "Zeryva — дилери",
			},
		],
	},

	formatDetection: {
		telephone: false,
	},
};

const dealersPageSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "CollectionPage",
			"@id": "https://zeryva.com.ua/dylery#webpage",
			url: "https://zeryva.com.ua/dylery",
			name: pageTitle,
			description: pageDescription,
			isPartOf: {
				"@id": "https://zeryva.com.ua/#website",
			},
			publisher: {
				"@id": "https://zeryva.com.ua/#organization",
			},
			breadcrumb: {
				"@id": "https://zeryva.com.ua/dylery#breadcrumb",
			},
			inLanguage: "uk-UA",
		},
		{
			"@type": "BreadcrumbList",
			"@id": "https://zeryva.com.ua/dylery#breadcrumb",
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
					name: "Дилери",
					item: "https://zeryva.com.ua/dylery",
				},
			],
		},
	],
};

const page = () => {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(dealersPageSchema).replace(/</g, "\\u003c"),
				}}
			/>
			<Dylery />
		</>
	);
};

export default page;
