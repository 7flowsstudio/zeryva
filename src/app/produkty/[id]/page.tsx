import { Metadata } from "next";
import { redirect } from "next/navigation";
import ItemPage from "@/components/Pages/ItemPage/ItemPage";
import { getProductForMetadata } from "@/lib/getProductForMetadata";

type Props = {
	params: Promise<{ id: string }>;
};

/**
 * SEO + OpenGraph для конкретного продукту
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	// console.log("SERVER PARAMS ID:", id);
	const product = getProductForMetadata(id);

	// console.log("SERVER PRODUCT:", product);

	if (!product) {
		return {
			title: "Продукт не знайдено | Zeryva",
			description: "Даний продукт не існує або був видалений",
		};
	}

	return {
		title: `${product.title} | Zeryva`,
		description: product.shortDescription,
		alternates: {
			canonical: `https://zeryva.com.ua/produkty/${product.slug}`,
		},

		openGraph: {
			title: product.title,
			description: product.shortDescription,
			url: `https://zeryva.com.ua/produkty/${product.slug}`,
			type: "website",
			images: product.image
				? [
						{
							url: product.image,
							width: 1200,
							height: 630,
							alt: product.title,
						},
					]
				: [],
		},

		twitter: {
			card: "summary_large_image",
			title: product.title,
			description: product.shortDescription,
			images: product.image ? [product.image] : [],
		},
	};
}

/**
 * Server page
 */
export default async function Page({ params }: Props) {
	const { id } = await params;
	const product = getProductForMetadata(id);

	if (product && product.slug !== id) {
		redirect(`/produkty/${product.slug}`);
	}

	return <ItemPage />;
}
