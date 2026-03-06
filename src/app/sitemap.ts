import { MetadataRoute } from "next";
import { productsMetadata, productTypeFilters } from "@/data/products-metadata";

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ||
	(process.env.VERCEL_URL
		? `https://${process.env.VERCEL_URL}`
		: "https://zeryva.com.ua");

export default function sitemap(): MetadataRoute.Sitemap {
	const staticPages = ["/", "/pro-nas", "/produkty", "/posluhy", "/kontakty"];

	const staticEntries = staticPages.map((path) =>
		buildEntry(path, {
			priority: path === "/" ? 0.9 : 0.8,
			changeFrequency: path === "/produkty" ? "weekly" : "monthly",
		}),
	);

	const productEntries = productsMetadata.map((product) =>
		buildEntry(`/${product.slug}`, {
			priority: 0.6,
			changeFrequency: "monthly",
		}),
	);

	const productTypeEntries = productTypeFilters.map((filter) =>
		buildEntry(`/${filter.slug}`, {
			priority: 0.4,
			changeFrequency: "monthly",
		}),
	);

	return [...staticEntries, ...productEntries, ...productTypeEntries];
}

type ChangeFreq =
	| "always"
	| "hourly"
	| "daily"
	| "weekly"
	| "monthly"
	| "yearly"
	| "never";

function buildEntry(
	path: string,
	options: { priority: number; changeFrequency: ChangeFreq },
): MetadataRoute.Sitemap[number] {
	const normalizedPriority = Math.min(1, Math.max(0, options.priority));

	return {
		url: `${siteUrl}${path}`,
		lastModified: new Date(),
		changeFrequency: options.changeFrequency,
		priority: normalizedPriority,
	};
}
