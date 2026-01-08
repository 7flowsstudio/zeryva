import React from "react";
import { Description, Product } from "../../../../../../../utils/types";
import s from "./DescriptionTab.module.css"

interface DescriptionTabProps {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

const DescriptionTab: React.FC<DescriptionTabProps> = ({
  product,
  setProduct,
}) => {
  const handleChange = (field: keyof Description, value: string) => {
    setProduct({
      ...product,
      description: {
        ...product.description,
        [field]: value,
      },
    });
  };

  return (
    <div className={s.descrCont}>
      <input
        placeholder="Склад"
        value={product.description.composition}
        onChange={(e) => handleChange("composition", e.target.value)}
      />
      <input
        placeholder="Мета застосування"
        value={product.description.purpose}
        onChange={(e) => handleChange("purpose", e.target.value)}
      />
      <input
        placeholder="Характеристика"
        value={product.description.characteristics}
        onChange={(e) => handleChange("characteristics", e.target.value)}
      />
      <input
        placeholder="Форма випуску"
        value={product.description.form}
        onChange={(e) => handleChange("form", e.target.value)}
      />
      <input
        placeholder="Пакування"
        value={product.description.packaging}
        onChange={(e) => handleChange("packaging", e.target.value)}
      />
      <input
        placeholder="Термін придатності"
        value={product.description.shelfLife}
        onChange={(e) => handleChange("shelfLife", e.target.value)}
      />
      <input
        placeholder="Сумісність"
        value={product.description.compatibility}
        onChange={(e) => handleChange("compatibility", e.target.value)}
      />
    </div>
  );
};

export default DescriptionTab;
