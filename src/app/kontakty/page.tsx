import Contacts from "@/components/Pages/Contacts/Contacts";
import { Metadata } from "next";
import React from "react";

const pageTitle = "Контакти | Zeryva";

const pageDescription =
	"Зв'яжіться з нами для консультацій та співпраці. Контактна інформація, адреса та схема проїзду до компанії Zeryva.";

export const metadata: Metadata = {
	title: "Контакти",
	description: pageDescription,

	alternates: {
		canonical: "https://zeryva.com.ua/kontakty",
	},

	openGraph: {
		title: pageTitle,
		description: pageDescription,
		url: "https://zeryva.com.ua/kontakty",
		type: "website",
		images: [
			{
				url: "/logo.svg",
				width: 504,
				height: 504,
				alt: "Zeryva — Контакти",
			},
		],
	},

	formatDetection: {
		telephone: false,
	},
};

const contactsPageSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "ContactPage",
			"@id": "https://zeryva.com.ua/kontakty#webpage",
			url: "https://zeryva.com.ua/kontakty",
			name: pageTitle,
			description: pageDescription,
			isPartOf: {
				"@id": "https://zeryva.com.ua/#website",
			},
			about: {
				"@id": "https://zeryva.com.ua/#organization",
			},
			breadcrumb: {
				"@id": "https://zeryva.com.ua/kontakty#breadcrumb",
			},
			inLanguage: "uk-UA",
		},
		{
			"@type": "BreadcrumbList",
			"@id": "https://zeryva.com.ua/kontakty#breadcrumb",
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
					name: "Контакти",
					item: "https://zeryva.com.ua/kontakty",
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
					__html: JSON.stringify(contactsPageSchema).replace(/</g, "\\u003c"),
				}}
			/>
			<Contacts />
		</>
	);
};

export default page;
