"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductWithId } from "../../../../../../utils/types";
import s from "./Card.module.css";
import { productsMetadata } from "@/data/products-metadata";
import Button from "@/components/Sections/UI/Btns/Button";

interface ProductCardProps {
	product: ProductWithId;
}

const Card: React.FC<ProductCardProps> = ({ product }) => {
	const slug =
		productsMetadata.find((item) => item.id === product.id)?.slug ?? product.id;

	return (
		<div className={s.card}>
			<Link href={`/${slug}`}>
				<div className={s.wrapp}>
					{product.images?.[0] && (
						<Image
							src={product.images[0]}
							alt={product.title}
							width={200}
							height={200}
						/>
					)}
				</div>
				<div className={s.blockDescr}>
					<h3 className={s.title}>{product.title}</h3>

					<p className={s.description}>{product.shortDescription}</p>
				</div>

				<p className={s.price}>{product.price}</p>
				<div className={s.linkWrapp}>
					<Button variant="filled" className={s.link}>
						Дізнатись більше
					</Button>
				</div>
			</Link>
		</div>
	);
};

export default Card;
