import Image from "next/image";
import Link from "next/link";
import s from "./BestsellerItem.module.css";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string | number;
  image: string;
}

interface ItemProps {
  product: Product;
}

export const BestsellerItem: React.FC<ItemProps> = ({ product }) => {
  return (
    <div className={s.card}>
      <Image src={product.image} alt={product.title} width={180} height={165} />
      <h3 className={s.title}>{product.title}</h3>
      <p className={s.description}>{product.description}</p>
      <p className={s.price}>{product.price}</p>
      <div className={s.linkWrapp}>
        <Link href={`/products/${product.id}`} className={s.link}>
          Дізнатись більше
        </Link>
      </div>
    </div>
  );
};
