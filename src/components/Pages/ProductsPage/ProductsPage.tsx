import React from "react";
import s from "./ProductsPage.module.css";
import Products from "./Products/Products";

const ProductsPage = () => {
  return (
    <div className={s.cont}>
      <h2 className={s.title}>Продукти «Зерива»</h2>
      <Products />
    </div>
  );
};

export default ProductsPage;
