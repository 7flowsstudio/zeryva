import { Metadata } from "next";
import { redirect } from "next/navigation";
import ItemPage from "@/components/Pages/ItemPage/ItemPage";
import ProductsPage from "@/components/Pages/ProductsPage/ProductsPage";
import { getProductForMetadata } from "@/lib/getProductForMetadata";
import { productTypeFilters } from "@/data/products-metadata";

type Props = {
	params: Promise<{ id: string }>;
};

/**
 * SEO + OpenGraph для конкретного продукту
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const filter = productTypeFilters.find((item) => item.slug === id);
	if (filter) {
		const metaTitle = filter.title ?? filter.label;
		const metaDescription =
			filter.shortDescription ??
			"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв";
		return {
			title: `${metaTitle} | Продукти | Zeryva`,
			description: metaDescription,
			alternates: {
				canonical: `https://zeryva.com.ua/${filter.slug}`,
			},
			openGraph: {
				title: `${metaTitle} | Продукти`,
				description: metaDescription,
				url: `https://zeryva.com.ua/${filter.slug}`,
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
		};
	}

	const product = getProductForMetadata(id);

	if (!product) {
		return {
			title: "Продукт не знайдено | Zeryva",
			description: "Даний продукт не існує або був видалений",
		};
	}

	return {
		title: product.title,
		description: product.shortDescription,
		alternates: {
			canonical: `https://zeryva.com.ua/${product.slug}`,
		},

		openGraph: {
			title: product.title,
			description: product.shortDescription,
			url: `https://zeryva.com.ua/${product.slug}`,
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
	const filter = productTypeFilters.find((item) => item.slug === id);
	if (filter) {
		return <ProductsPage initialFilterSlug={filter.slug} />;
	}
	const product = getProductForMetadata(id);

	if (product && product.slug !== id) {
		redirect(`/${product.slug}`);
	}

	return <ItemPage />;
}
