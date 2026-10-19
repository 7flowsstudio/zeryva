import Image from "next/image";
import Link from "next/link";
import s from "./BestsellerItem.module.css";
import { ProductWithId } from "../../../../../utils/types";
import { productsMetadata } from "@/data/products-metadata";
import Button from "../../UI/Btns/Button";

interface ProductCardProps {
	product: ProductWithId;
}

export const BestsellerItem: React.FC<ProductCardProps> = ({ product }) => {
	const slug =
		productsMetadata.find((item) => item.id === product.id)?.slug ?? product.id;

	return (
		<li className={s.card}>
			<Link href={`/${slug}`}>
				{product.images?.[0] && (
					
						<Image
							src={product.images[0]}
							alt={product.title}
							width={180}
							height={165}
						/>
				
				)}
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
		</li>
	);
};
