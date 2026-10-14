import "server-only";

import { adminDb } from "./firebaseAdmin";
import { Product } from "../../utils/types";
import { productsMetadata, productTypeFilters } from "@/data/products-metadata";

const siteUrl = "https://zeryva.com.ua";

export async function getProductCollectionSchema(filterSlug?: string) {
	const filter = productTypeFilters.find((item) => item.slug === filterSlug);

	const snapshot = await adminDb.collection("products").get();

	const metadataById = new Map(productsMetadata.map((item) => [item.id, item]));

	const items = snapshot.docs.flatMap((doc) => {
		const metadata = metadataById.get(doc.id);

		if (!metadata) return [];

		const product = doc.data() as Product;

		if (
			filter &&
			!product.productType?.includes(
				filter.label as Product["productType"][number],
			)
		) {
			return [];
		}

		return [
			{
				name: product.title || metadata.title,
				url: `${siteUrl}/${metadata.slug}`,
			},
		];
	});

	items.sort((a, b) => a.name.localeCompare(b.name, "uk"));

	const pageUrl = filter ? `${siteUrl}/${filter.slug}` : `${siteUrl}/produkty`;

	const pageName = filter ? (filter.title ?? filter.label) : "Продукти";

	const pageDescription = filter
		? filter.shortDescription
		: "Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв";

	const breadcrumbItems = [
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
		...(filter
			? [
					{
						"@type": "ListItem",
						position: 3,
						name: filter.label,
						item: pageUrl,
					},
				]
			: []),
	];

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "CollectionPage",
				"@id": `${pageUrl}#webpage`,
				url: pageUrl,
				name: pageName,
				description: pageDescription,
				isPartOf: {
					"@id": `${siteUrl}/#website`,
				},
				publisher: {
					"@id": `${siteUrl}/#organization`,
				},
				mainEntity: {
					"@id": `${pageUrl}#itemlist`,
				},
				breadcrumb: {
					"@id": `${pageUrl}#breadcrumb`,
				},
				inLanguage: "uk-UA",
			},
			{
				"@type": "ItemList",
				"@id": `${pageUrl}#itemlist`,
				name: filter
					? `Товари категорії «${filter.label}»`
					: "Усі продукти Zeryva",
				numberOfItems: items.length,
				itemListElement: items.map((item, index) => ({
					"@type": "ListItem",
					position: index + 1,
					name: item.name,
					item: item.url,
				})),
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${pageUrl}#breadcrumb`,
				itemListElement: breadcrumbItems,
			},
		],
	};
}
