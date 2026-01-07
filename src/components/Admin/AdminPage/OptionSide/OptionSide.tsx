"use client";
import React from "react";
import s from "./OptionSide.module.css";
import Add from "./Add/Add";
import Products from "./Products/Products";
import { AdminSection } from "../MenuSide/MenuSide";

type OptionSideProps = {
  active: AdminSection;
};
const OptionSide = ({ active }: OptionSideProps) => {
  if (active === "add")
    return (
      <div className={s.optionSideWrapper}>
        <Add />
      </div>
    );
  if (active === "products")
    return (
      <div className={s.optionSideWrapper}>
        <Products />
      </div>
    );
  return null;
};

export default OptionSide;
