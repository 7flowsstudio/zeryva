import type { Metadata } from "next";
import ProductsPage from "@/components/Pages/ProductsPage/ProductsPage";
import { getProductCollectionSchema } from "@/lib/productCollectionSchema";

export const metadata: Metadata = {
	title: "Продукти",
	description:
		"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв",

	alternates: {
		canonical: "https://zeryva.com.ua/produkty",
	},

	openGraph: {
		title: "Продукти",
		description:
			"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв",
		url: "https://zeryva.com.ua/produkty",
		type: "website",
		images: [
			{
				url: "/logo.svg",
				width: 504,
				height: 504,
				alt: "Продукти Zeryva",
			},
		],
	},

	formatDetection: {
		telephone: false,
	},
};

export default function Page() {
	const structuredData = getProductCollectionSchema();
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
				}}
			/>
			<ProductsPage />
		</>
	);
}
