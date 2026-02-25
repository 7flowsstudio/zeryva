"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductWithId } from "../../../../../../utils/types";
import s from "./Card.module.css";
import { productsMetadata } from "@/data/products-metadata";

interface ProductCardProps {
	product: ProductWithId;
}

const Card: React.FC<ProductCardProps> = ({ product }) => {
	const slug =
		productsMetadata.find((item) => item.id === product.id)?.slug ?? product.id;

	return (
		<div className={s.card}>
			{product.images?.[0] && (
				<Link href={`/produkty/${slug}`}>
					<Image
						src={product.images[0]}
						alt={product.title}
						width={200}
						height={200}
					/>
				</Link>
			)}

			<div className={s.blockDescr}>
				<Link href={`/produkty/${slug}`}>
					<h3 className={s.title}>{product.title}</h3>
				</Link>

				<p className={s.description}>{product.shortDescription}</p>
			</div>

			<p className={s.price}>{product.price}</p>
			<div className={s.linkWrapp}>
				<Link href={`/produkty/${slug}`} className={s.link}>
					Дізнатись більше
				</Link>
			</div>
		</div>
	);
};

export default Card;
