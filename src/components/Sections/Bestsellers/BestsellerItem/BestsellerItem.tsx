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
    <li className={s.card}>
      <Image src={product.image} alt={product.title} width={180} height={165} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div className="footer">
        <span>{product.price}</span>
        <Link href={`/products/${product.id}`}>Дізнатись більше</Link>
      </div>
    </li>
  );
};
