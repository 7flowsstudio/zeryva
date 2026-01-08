"use client";
import React from "react";
import s from "./ItemPage.module.css";

import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "../../../../utils/types";
import { db } from "../../../../firebaseConfig";
import Image from "next/image";

const ItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  const propertiesConfig = [
    {
      key: "consistency",
      icon: "/sprite.svg#icon-location",
    },
    {
      key: "volume",
      icon: "/sprite.svg#icon-location",
    },
    {
      key: "shelfLife",
      icon: "/sprite.svg#icon-location",
    },
    {
      key: "storageTemp",
      icon: "/sprite.svg#icon-location",
    },
  ] as const;

  useEffect(() => {
    const fetchProduct = async () => {
      const ref = doc(db, "products", id);
      const snap = await getDoc(ref);
      if (snap.exists()) setProduct(snap.data() as Product);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Завантаження...</p>;

  return (
    <div className={s.cont}>
      <h1>{product.title}</h1>
      <Image
        src={product.images[0]}
        alt={product.title}
        width={200}
        height={200}
      />
      <p>{product.descriptionText}</p>
      <p>{product.price}</p>
      <ul>
        {propertiesConfig.map(({ key, icon }) => (
          <li key={key}>
            <svg width={16} height={16}>
              <use href={icon} />
            </svg>
            <span>{product.properties[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemPage;
