"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductWithId } from "../../../../../../utils/types";

interface ProductCardProps {
  product: ProductWithId;
}

const Card: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 16,
        borderRadius: 8,
      }}
    >
      {product.images?.[0] && (
        <Image
          src={product.images[0]}
          alt={product.title}
          width={200}
          height={200}
        />
      )}

      <h3>{product.title}</h3>
      <p>{product.price}</p>

      <Link href={`/products/${product.id}`}>Дізнатись більше →</Link>
    </div>
  );
};

export default Card;
