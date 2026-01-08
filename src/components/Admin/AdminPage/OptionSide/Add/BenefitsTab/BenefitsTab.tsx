import React, { useState } from "react";
import { Product } from "../../../../../../../utils/types";
import s from "./BenefitsTab.module.css";

interface BenefitsTabProps {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

const BenefitsTab: React.FC<BenefitsTabProps> = ({ product, setProduct }) => {
  const [newBenefit, setNewBenefit] = useState("");

  const addBenefit = () => {
    if (newBenefit.trim() === "") return;
    setProduct({
      ...product,
      benefits: [...product.benefits, newBenefit],
    });
    setNewBenefit("");
  };

  const removeBenefit = (index: number) => {
    setProduct({
      ...product,
      benefits: product.benefits.filter((_, i) => i !== index),
    });
  };

  return (
    <div className={s.benefCont}>
      <ul>
        {product.benefits.map((benefit, index) => (
          <li key={index}>
            {benefit}{" "}
            <button type="button" onClick={() => removeBenefit(index)}>
              Видалити
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newBenefit}
        placeholder="Нова перевага"
        onChange={(e) => setNewBenefit(e.target.value)}
      />
      <button type="button" onClick={addBenefit}>
        Додати перевагу
      </button>
    </div>
  );
};

export default BenefitsTab;
