import React from "react";
import { Description, Product } from "../../../../../../../utils/types";
import s from "./DescriptionTab.module.css";

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
      <textarea
        placeholder="Склад"
        value={product.description.composition}
        onChange={(e) => handleChange("composition", e.target.value)}
      />
      <textarea
        placeholder="Мета застосування"
        value={product.description.purpose}
        onChange={(e) => handleChange("purpose", e.target.value)}
      />
      <textarea
        placeholder="Характеристика"
        value={product.description.characteristics}
        onChange={(e) => handleChange("characteristics", e.target.value)}
      />
      <textarea
        placeholder="Особливості"
        value={product.description.features}
        onChange={(e) => handleChange("features", e.target.value)}
      />
      <textarea
        placeholder="Форма випуску"
        value={product.description.form}
        onChange={(e) => handleChange("form", e.target.value)}
      />
      <textarea
        placeholder="Пакування"
        value={product.description.packaging}
        onChange={(e) => handleChange("packaging", e.target.value)}
      />
      <textarea
        placeholder="Термін придатності"
        value={product.description.shelfLife}
        onChange={(e) => handleChange("shelfLife", e.target.value)}
      />
      <textarea
        placeholder="Сумісність"
        value={product.description.compatibility}
        onChange={(e) => handleChange("compatibility", e.target.value)}
      />
    </div>
  );
};

export default DescriptionTab;
