import React from "react";
import { Product } from "../../../../../utils/types";

interface BenefitsProps {
  product: Product;
}

const Benefits: React.FC<BenefitsProps> = ({ product }) => {
  return (
    <div>
      <h3>Переваги</h3>
      <ul>
        {product.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;
