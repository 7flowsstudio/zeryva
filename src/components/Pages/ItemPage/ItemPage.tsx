"use client";
import React from "react";
import s from "./ItemPage.module.css";

import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "../../../../utils/types";
import { db } from "../../../../firebaseConfig";
import Image from "next/image";
import Description from "./Description/Description";
import Benefits from "./Benefits/Benefits";
import Instruction from "./Instruction/Instruction";
import BreadCrumbs from "@/components/Sections/UI/BreadCrumbs/BreadCrumbs";

type Tab = "description" | "benefits" | "instruction";

const ItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("description");
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const propertiesConfig = [
    {
      key: "consistency",
      icon: "/sprite.svg#icon-fluent",
    },
    {
      key: "volume",
      icon: "/sprite.svg#icon-weight",
    },
    {
      key: "shelfLife",
      icon: "/sprite.svg#icon-duration",
    },
    {
      key: "storageTemp",
      icon: "/sprite.svg#icon-temperature",
    },
  ] as const;

  useEffect(() => {
    const fetchProduct = async () => {
      const ref = doc(db, "products", id);
      const snap = await getDoc(ref);
      if (snap.exists()) setProduct(snap.data() as Product);
      setMainImageIndex(0);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Завантаження...</p>;

  const thumbnailImages =
    product.images?.filter((_, i) => i !== mainImageIndex) || [];

  return (
    <div className={s.cont}>
      <BreadCrumbs
        crumbs={[
          { label: "Головна", href: "/" },
          { label: "Продукти", href: "/products" },
          { label: product.title },
        ]}
      />
      <h1>{product.title}</h1>
      <div className={s.mainImage}>
        <Image
          src={product.images[mainImageIndex]}
          alt={product.title}
          width={400}
          height={400}
        />
      </div>

      {/* Мініатюри без головного */}
      <div className={s.thumbnails}>
        {thumbnailImages.map((img, i) => {
          const originalIndex = product.images.findIndex(
            (pImg) => pImg === img
          );
          return (
            <div
              key={originalIndex}
              className={s.thumb}
              onClick={() => setMainImageIndex(originalIndex)}
            >
              <Image src={img} alt={product.title} width={80} height={80} />
            </div>
          );
        })}
      </div>
      <p>{product.descriptionText}</p>
      <p>{product.price}</p>
      <ul>
        {propertiesConfig.map(({ key, icon }) => (
          <li key={key}>
            <div className={s.iconWrap}>
              <svg width={16} height={16} className={s.icon}>
                <use href={icon} />
              </svg>
            </div>
            <span>{product.properties[key]}</span>
          </li>
        ))}
      </ul>
      <div>
        <div className={s.tabs}>
          <button
            className={activeTab === "description" ? s.active : ""}
            onClick={() => setActiveTab("description")}
          >
            Опис
          </button>
          <button
            className={activeTab === "benefits" ? s.active : ""}
            onClick={() => setActiveTab("benefits")}
          >
            Переваги
          </button>
          <button
            className={activeTab === "instruction" ? s.active : ""}
            onClick={() => setActiveTab("instruction")}
          >
            Інструкція
          </button>
        </div>

        {/* Content */}
        <div className={s.content}>
          {activeTab === "description" && <Description product={product} />}

          {activeTab === "benefits" && <Benefits product={product} />}

          {activeTab === "instruction" && <Instruction product={product} />}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
