import React from "react";
import s from "./ProductsPage.module.css";
import Products from "./Products/Products";
import BreadCrumbs from "@/components/Sections/UI/BreadCrumbs/BreadCrumbs";

const ProductsPage = () => {
  return (
    <div className={s.cont}>
      <BreadCrumbs
        crumbs={[{ label: "Головна", href: "/" }, { label: "Продукти" }]}
      />
      <h2 className={s.title}>Продукти «Зерива»</h2>
      <Products />
    </div>
  );
};

export default ProductsPage;
