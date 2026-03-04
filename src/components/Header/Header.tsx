"use client";
import React, { useEffect, useState } from "react";
import s from "./Header.module.css";
import DescHeader from "./DescHeader/DescHeader";
import MobHeader from "./MobHeader/MobHeader";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { productsMetadata } from "@/data/products-metadata";

type IsScroledProp = {
	isScrolled?: boolean;
};

export type SearchItem = {
	id: string;
	slug: string;
	title: string;
	shortDescription: string;
};

const Header = ({ isScrolled }: IsScroledProp) => {
	const [searchItems, setSearchItems] = useState<SearchItem[]>([]);
	const [isMobileViewport, setIsMobileViewport] = useState(() =>
		typeof window !== "undefined"
			? window.matchMedia("(max-width: 767px)").matches
			: false,
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 767px)");

		const handleViewportChange = (event: MediaQueryListEvent) => {
			setIsMobileViewport(event.matches);
		};

		mediaQuery.addEventListener("change", handleViewportChange);

		return () => {
			mediaQuery.removeEventListener("change", handleViewportChange);
		};
	}, []);

	useEffect(() => {
		const fetchProducts = async () => {
			const slugById = new Map(
				productsMetadata.map((item) => [item.id, item.slug]),
			);
			const snap = await getDocs(collection(db, "products"));
			const data = snap.docs.map((doc) => ({
				id: doc.id,
				slug: slugById.get(doc.id) ?? doc.id,
				title: doc.data().title,
				shortDescription: doc.data().shortDescription,
			}));
			setSearchItems(data);
		};

		fetchProducts();
	}, []);

	return (
		<div className={`${s.header} ${isScrolled ? s.scrolled : ""}`}>
			<div className="container">
				<div className={s.headerBlock}>
					{isMobileViewport ? (
						<MobHeader isScrolled={isScrolled} searchItems={searchItems} />
					) : (
						<DescHeader searchItems={searchItems} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
