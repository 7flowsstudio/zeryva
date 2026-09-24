"use client";
import React from "react";
import s from "./Categories.module.css";
import { items } from "@/data/сategories/categories";
import Link from "next/link";
import Image from "next/image";

const Categories = () => {
	return (
		<div className={`container ${s.categorCont}`}>
			<h2 className={s.titleCat}>Категорії</h2>
			<div className={s.gallery}>
				{items.map((item) => (
					<Link href={item.href} className={s.item} key={item.title}>
						<Image src={item.image} alt={item.title} fill className={s.image} />

						<div className={s.overlay} />

						<span className={s.title}>{item.title}</span>
					</Link>
				))}
			</div>
		</div>
	);
};
export default Categories;
