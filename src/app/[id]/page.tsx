import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import ItemPage from "@/components/Pages/ItemPage/ItemPage";
import ProductsPage from "@/components/Pages/ProductsPage/ProductsPage";
import { getProductForMetadata } from "@/lib/getProductForMetadata";
import { productTypeFilters } from "@/data/products-metadata";
import { Product } from "../../../utils/types";
import { adminDb } from "@/lib/firebaseAdmin";
import { getProductCollectionSchema } from "@/lib/productCollectionSchema";

type Props = {
	params: Promise<{ id: string }>;
};

const siteUrl = "https://zeryva.com.ua";

async function getProduct(id: string): Promise<Product | null> {
	const metadata = getProductForMetadata(id);

	if (!metadata) return null;

	const doc = await adminDb.collection("products").doc(metadata.id).get();

	if (!doc.exists) return null;

	return doc.data() as Product;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;

	const filter = productTypeFilters.find((item) => item.slug === id);

	if (filter) {
		const metaTitle = filter.title ?? filter.label;
		const metaDescription =
			filter.shortDescription ??
			"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв";

		return {
			title: metaTitle,
			description: metaDescription,
			alternates: {
				canonical: `${siteUrl}/${filter.slug}`,
			},
			openGraph: {
				title: `${metaTitle} | Продукти`,
				description: metaDescription,
				url: `${siteUrl}/${filter.slug}`,
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

	const metadata = getProductForMetadata(id);

	if (!metadata) {
		return {
			title: "Продукт не знайдено | Zeryva",
			description: "Даний продукт не існує або був видалений",
		};
	}

	const product = await getProduct(id);

	return {
		title: product?.title ?? metadata.title,
		description: product?.shortDescription ?? metadata.shortDescription,
		alternates: {
			canonical: `${siteUrl}/${metadata.slug}`,
		},
		openGraph: {
			title: product?.title ?? metadata.title,
			description: product?.shortDescription ?? metadata.shortDescription,
			url: `${siteUrl}/${metadata.slug}`,
			type: "website",
			images: metadata.image
				? [
						{
							url: metadata.image.startsWith("http")
								? metadata.image
								: `${siteUrl}${metadata.image}`,
							width: 1200,
							height: 630,
							alt: product?.title ?? metadata.title,
						},
					]
				: [],
		},
		twitter: {
			card: "summary_large_image",
			title: product?.title ?? metadata.title,
			description: product?.shortDescription ?? metadata.shortDescription,
			images: metadata.image
				? [
						metadata.image.startsWith("http")
							? metadata.image
							: `${siteUrl}${metadata.image}`,
					]
				: [],
		},
	};
}

export default async function Page({ params }: Props) {
	const { id } = await params;

	const filter = productTypeFilters.find((item) => item.slug === id);

	if (filter) {
		const structuredData = await getProductCollectionSchema(filter.slug);

		return (
			<>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
					}}
				/>
				<ProductsPage initialFilterSlug={filter.slug} />
			</>
		);
	}

	const metadata = getProductForMetadata(id);

	if (!metadata) {
		notFound();
	}

	if (metadata.slug !== id) {
		redirect(`/${metadata.slug}`);
	}

	const product = await getProduct(id);

	if (!product) {
		notFound();
	}

	const productUrl = `${siteUrl}/${metadata.slug}`;
	const productId = `${productUrl}#product`;
	const pageId = `${productUrl}#webpage`;
	const breadcrumbId = `${productUrl}#breadcrumb`;

	const images = (product.images ?? []).map((image) =>
		image.startsWith("http") ? image : `${siteUrl}${image}`,
	);

	const priceText = String(product.price ?? "").trim();

	const priceMatch = priceText.match(
		/^(\d+(?:[.,]\d{1,2})?)\s*(?:грн|₴|UAH)?(?:\s*\/\s*(?:л|літр|кг|кг\.|кілограм|кілограмів))?$/i,
	);

	const numericPrice = priceMatch
		? Number(priceMatch[1].replace(",", "."))
		: NaN;

	const hasValidPrice = Number.isFinite(numericPrice) && numericPrice > 0;
	console.log("Product:", product.title);
	console.log("Price from Firebase:", JSON.stringify(product.price));
	console.log("Parsed price:", numericPrice);
	console.log("Has valid price:", hasValidPrice);
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": pageId,
				url: productUrl,
				name: product.title,
				description: product.shortDescription,
				breadcrumb: { "@id": breadcrumbId },
				mainEntity: { "@id": productId },
				isPartOf: { "@id": `${siteUrl}/#website` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": breadcrumbId,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Головна",
						item: siteUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Продукти",
						item: `${siteUrl}/produkty`,
					},
					{
						"@type": "ListItem",
						position: 3,
						name: product.title,
						item: productUrl,
					},
				],
			},
			{
				"@type": "Product",
				"@id": productId,
				name: product.title,
				url: productUrl,
				description: product.descriptionText || product.shortDescription,
				image: images.length > 0 ? images : undefined,
				category: Array.isArray(product.productType)
					? product.productType.join(", ")
					: typeof product.productType === "string"
						? product.productType
						: undefined,
				brand: {
					"@type": "Brand",
					name: "Zeryva",
				},
				manufacturer: {
					"@type": "Organization",
					"@id": `${siteUrl}/#organization`,
					name: "Zeryva",
				},
				additionalProperty: [
					{
						"@type": "PropertyValue",
						name: "Форма препарату",
						value: product.formType,
					},
					...Object.entries(product.properties ?? {}).map(([name, value]) => ({
						"@type": "PropertyValue",
						name,
						value: String(value ?? ""),
					})),
				],
				...(hasValidPrice
					? {
							offers: {
								"@type": "Offer",
								url: productUrl,
								priceCurrency: "UAH",
								price: numericPrice,
								itemCondition: "https://schema.org/NewCondition",
								seller: {
									"@id": `${siteUrl}/#organization`,
								},
							},
						}
					: {}),
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
				}}
			/>
			<ItemPage />
		</>
	);
}

// type Props = {
// 	params: Promise<{ id: string }>;
// };

// /**
//  * SEO + OpenGraph для конкретного продукту
//  */
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
// 	const { id } = await params;
// 	const filter = productTypeFilters.find((item) => item.slug === id);
// 	if (filter) {
// 		const metaTitle = filter.title ?? filter.label;
// 		const metaDescription =
// 			filter.shortDescription ??
// 			"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв";
// 		return {
// 			title: `${metaTitle}`,
// 			description: metaDescription,
// 			alternates: {
// 				canonical: `https://zeryva.com.ua/${filter.slug}`,
// 			},
// 			openGraph: {
// 				title: `${metaTitle} | Продукти`,
// 				description: metaDescription,
// 				url: `https://zeryva.com.ua/${filter.slug}`,
// 				type: "website",
// 				images: [
// 					{
// 						url: "/logo.svg",
// 						width: 504,
// 						height: 504,
// 						alt: "Продукти Zeryva",
// 					},
// 				],
// 			},
// 		};
// 	}

// 	const product = getProductForMetadata(id);

// 	if (!product) {
// 		return {
// 			title: "Продукт не знайдено | Zeryva",
// 			description: "Даний продукт не існує або був видалений",
// 		};
// 	}

// 	return {
// 		title: product.title,
// 		description: product.shortDescription,
// 		alternates: {
// 			canonical: `https://zeryva.com.ua/${product.slug}`,
// 		},

// 		openGraph: {
// 			title: product.title,
// 			description: product.shortDescription,
// 			url: `https://zeryva.com.ua/${product.slug}`,
// 			type: "website",
// 			images: product.image
// 				? [
// 						{
// 							url: product.image,
// 							width: 1200,
// 							height: 630,
// 							alt: product.title,
// 						},
// 					]
// 				: [],
// 		},

// 		twitter: {
// 			card: "summary_large_image",
// 			title: product.title,
// 			description: product.shortDescription,
// 			images: product.image ? [product.image] : [],
// 		},
// 	};
// }

// /**
//  * Server page
//  */
// export default async function Page({ params }: Props) {
// 	const { id } = await params;
// 	const filter = productTypeFilters.find((item) => item.slug === id);
// 	if (filter) {
// 		return <ProductsPage initialFilterSlug={filter.slug} />;
// 	}
// 	const product = getProductForMetadata(id);

// 	if (product && product.slug !== id) {
// 		redirect(`/${product.slug}`);
// 	}

// 	return <ItemPage />;
// }
