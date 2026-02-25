import Image from "next/image";
import Link from "next/link";
import s from "./BestsellerItem.module.css";
import { ProductWithId } from "../../../../../utils/types";
import { productsMetadata } from "@/data/products-metadata";

interface ProductCardProps {
	product: ProductWithId;
}

export const BestsellerItem: React.FC<ProductCardProps> = ({ product }) => {
	const slug =
		productsMetadata.find((item) => item.id === product.id)?.slug ?? product.id;

	return (
		<li className={s.card}>
			{product.images?.[0] && (
				<Link href={`/produkty/${slug}`}>
					<Image
						src={product.images[0]}
						alt={product.title}
						width={180}
						height={165}
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
		</li>
	);
};
