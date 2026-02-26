"use client";

import React, { Suspense } from "react";
import s from "./ProductsPage.module.css";
import Products from "./Products/Products";
import BreadCrumbs from "@/components/Sections/UI/BreadCrumbs/BreadCrumbs";
import dynamic from "next/dynamic";
import { productTypeFilters } from "@/data/products-metadata";
// import TitleVideo from "./TitleVideo/TitleVideo";
const TitleVideo = dynamic(() => import("./TitleVideo/TitleVideo"), {
	ssr: false,
});

type Props = {
	initialFilterSlug?: string | null;
};

const ProductsPage: React.FC<Props> = ({ initialFilterSlug = null }) => {
	const filterLabel =
		productTypeFilters.find((filter) => filter.slug === initialFilterSlug)
			?.label ?? null;
	const crumbs: { label: string; href?: string }[] = [
		{ label: "Головна", href: "/" },
		{ label: "Продукти", href: "/produkty" },
	];

	if (filterLabel) {
		crumbs.push({ label: filterLabel });
	}

	return (
		<div className={s.cont}>
			<BreadCrumbs crumbs={crumbs} />
			<TitleVideo />
			<Suspense fallback={<p>Завантаження продуктів...</p>}>
				<Products initialFilterSlug={initialFilterSlug} />
			</Suspense>
		</div>
	);
};

export default ProductsPage;
