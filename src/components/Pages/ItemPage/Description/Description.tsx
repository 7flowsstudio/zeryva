import React from "react";
import { Product } from "../../../../../utils/types";

interface DescriptionProps {
  product: Product;
}

const Description: React.FC<DescriptionProps> = ({ product }) => {
  return (
    <div>
      <p>
        <strong>Склад:</strong> {product.description.composition}
      </p>
      <p>
        <strong>Мета застосування:</strong> {product.description.purpose}
      </p>
      <p>
        <strong>Характеристика:</strong> {product.description.characteristics}
      </p>
      <p>
        <strong>Форма випуску:</strong> {product.description.form}
      </p>
      <p>
        <strong>Пакування:</strong> {product.description.packaging}
      </p>
      <p>
        <strong>Термін придатності:</strong> {product.description.shelfLife}
      </p>
      <p>
        <strong>Сумісність:</strong> {product.description.compatibility}
      </p>
    </div>
  );
};

export default Description;
