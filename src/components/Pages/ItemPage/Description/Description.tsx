import React from "react";
import { Product } from "../../../../../utils/types";
import s from "./Description.module.css";

interface DescriptionProps {
  product: Product;
}

type FieldProps = {
  label: string;
  value?: string;
};

const Field: React.FC<FieldProps> = ({ label, value }) => {
  if (!value?.trim()) return null;

  return (
    <div className={s.contDescrItem} style={{ marginBottom: 16 }}>
      <strong>{label}:</strong>
      <div style={{ height: 8 }} />
      <div>{value}</div>
    </div>
  );
};

const Description: React.FC<DescriptionProps> = ({ product }) => {
  const d = product.description;

  return (
    <div>
      <Field label="Склад" value={d.composition} />
      <Field label="Мета застосування" value={d.purpose} />
      <Field label="Характеристика" value={d.characteristics} />
      <Field label="Особливості" value={d.features} />
      <Field label="Форма випуску" value={d.form} />
      <Field label="Пакування" value={d.packaging} />
      <Field label="Термін придатності" value={d.shelfLife} />
      <Field label="Сумісність" value={d.compatibility} />
    </div>
  );
};

export default Description;
