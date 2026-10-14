import Services from "@/components/Pages/Services/Services";
import { Metadata } from "next";
import React from "react";

const pageTitle = "Послуги | Zeryva";

const pageDescription =
	"Комплексні агрономічні та біотехнологічні послуги для ефективного застосування біопрепаратів у сільському господарстві: аналіз умов, індивідуальні консультації, виїзд спеціалістів у поле та оперативна доставка.";

export const metadata: Metadata = {
	title: "Послуги",
	description: pageDescription,

	alternates: {
		canonical: "https://zeryva.com.ua/posluhy",
	},

	openGraph: {
		title: pageTitle,
		description: pageDescription,
		url: "https://zeryva.com.ua/posluhy",
		type: "website",
		images: [
			{
				url: "/logo.svg",
				width: 504,
				height: 504,
				alt: "Zeryva — Послуги",
			},
		],
	},

	formatDetection: {
		telephone: false,
	},
};

const servicesPageSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebPage",
			"@id": "https://zeryva.com.ua/posluhy#webpage",
			url: "https://zeryva.com.ua/posluhy",
			name: pageTitle,
			description: pageDescription,
			isPartOf: {
				"@id": "https://zeryva.com.ua/#website",
			},
			publisher: {
				"@id": "https://zeryva.com.ua/#organization",
			},
			mainEntity: {
				"@id": "https://zeryva.com.ua/posluhy#service",
			},
			breadcrumb: {
				"@id": "https://zeryva.com.ua/posluhy#breadcrumb",
			},
			inLanguage: "uk-UA",
		},
		{
			"@type": "Service",
			"@id": "https://zeryva.com.ua/posluhy#service",
			name: "Експертний супровід агровиробництва",
			serviceType: "Агрономічний та біотехнологічний супровід",
			description:
				"Комплексні агрономічні та біотехнологічні послуги для ефективного застосування біопрепаратів у сільському господарстві. Підхід базується на наукових знаннях, практичному досвіді та реальних умовах вирощування.",
			provider: {
				"@id": "https://zeryva.com.ua/#organization",
			},
			areaServed: {
				"@type": "Country",
				name: "Україна",
			},
			audience: {
				"@type": "Audience",
				audienceType: "Фермерські господарства та агропідприємства",
			},
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: "Послуги Zeryva",
				itemListElement: [
					{
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: "Детальний аналіз виробничих процесів та агрономічних умов",
						},
					},
					{
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: "Індивідуальні рекомендації та експертні консультації щодо застосування біопрепаратів",
						},
					},
					{
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: "Виїзд спеціалістів у господарства для оцінки умов безпосередньо в полі",
						},
					},
					{
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: "Оперативна доставка біопрепаратів у погоджені терміни",
						},
					},
				],
			},
		},
		{
			"@type": "BreadcrumbList",
			"@id": "https://zeryva.com.ua/posluhy#breadcrumb",
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
					name: "Послуги",
					item: "https://zeryva.com.ua/posluhy",
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
					__html: JSON.stringify(servicesPageSchema).replace(/</g, "\\u003c"),
				}}
			/>
			<Services />
		</>
	);
};

export default page;
