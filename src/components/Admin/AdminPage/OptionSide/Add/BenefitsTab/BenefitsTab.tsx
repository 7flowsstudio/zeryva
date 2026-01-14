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
      <ul className={s.listBenefits}>
        {product.benefits.map((benefit, index) => (
          <li className={s.item} key={index}>
            {benefit}{" "}
            <button
              className={s.btn}
              type="button"
              onClick={() => removeBenefit(index)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>

      <textarea
        className={s.textar}
        value={newBenefit}
        placeholder="Нова перевага"
        onChange={(e) => setNewBenefit(e.target.value)}
      />
      <button className={s.add} type="button" onClick={addBenefit}>
        Додати перевагу
      </button>
    </div>
  );
};

export default BenefitsTab;
