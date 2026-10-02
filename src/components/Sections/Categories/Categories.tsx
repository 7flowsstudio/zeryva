"use client";
import React from "react";
import s from "./Categories.module.css";
import { items } from "@/data/сategories/categories";
import Link from "next/link";
import Image from "next/image";
import useScrollAnimation from "../../../../utils/UseScrollAnimation/useScrollAnimation";

const Categories = () => {
	const [aboutTitleRef, aboutTitleVisible] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	const [t1Ref, t1Vis] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	return (
		<div className={`container ${s.categorCont}`}>
			<h2
				ref={aboutTitleRef}
				className={`${s.titleCat} ${s.animateTitle} ${
					aboutTitleVisible ? s.visible : ""
				}`}
			>
				Категорії
			</h2>
			<div
				ref={t1Ref}
				className={`${s.gallery} ${s.fromRight} ${t1Vis ? s.visible : ""}`}
			>
				{items.map((item) => (
					<Link href={item.href} className={s.item} key={item.title}>
						<div className={s.imageWrapper}>
							<Image
								src={item.image}
								alt={item.title}
								width={384}
								height={384}
								className={s.image}
							/>
						</div>

						<div className={s.overlay} />

						<span className={s.title}>{item.title}</span>
					</Link>
				))}
			</div>
		</div>
	);
};
export default Categories;
