"use client";
import React, { useState } from "react";
import s from "./Add.module.css";
import MainTab from "./MainTab/MainTab";
import DescriptionTab from "./DescriptionTab/DescriptionTab";
import BenefitsTab from "./BenefitsTab/BenefitsTab";
import InstructionTab from "./InstructionTab/InstructionTab";
import { Product } from "../../../../../../utils/types";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../../../firebaseConfig";

type Tab = "main" | "description" | "benefits" | "instruction";

const Add = () => {
  const [activeTab, setActiveTab] = useState<Tab>("main");
  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState<Product>({
    title: "",
    price: "",
    images: [],
    certificates: [],
    youtubeUrl: "",
    properties: { consistency: "", volume: "", shelfLife: "", storageTemp: "" },
    description: {
      composition: "",
      purpose: "",
      characteristics: "",
      form: "",
      packaging: "",
      shelfLife: "",
      compatibility: "",
    },
    benefits: [],
    instructionTable: { columns: [], rows: [] },
  });

  const saveProduct = async () => {
    if (!product.title || !product.price) {
      alert("Заповни назву і ціну");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "products"), {
        ...product,
        createdAt: serverTimestamp(),
      });

      alert("Продукт додано ✅");

      // reset
      setProduct({
        title: "",
        price: "",
        images: [],
        certificates: [],
        youtubeUrl: "",
        properties: {
          consistency: "",
          volume: "",
          shelfLife: "",
          storageTemp: "",
        },
        description: {
          composition: "",
          purpose: "",
          characteristics: "",
          form: "",
          packaging: "",
          shelfLife: "",
          compatibility: "",
        },
        benefits: [],
        instructionTable: { columns: [], rows: [] },
      });
    } catch (e) {
      console.error(e);
      alert("Помилка збереження");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.tabs}>
        <button
          className={activeTab === "main" ? s.active : ""}
          onClick={() => setActiveTab("main")}
        >
          Основне
        </button>
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
        {activeTab === "main" && (
          <MainTab product={product} setProduct={setProduct} />
        )}

        {activeTab === "description" && (
          <DescriptionTab product={product} setProduct={setProduct} />
        )}

        {activeTab === "benefits" && (
          <BenefitsTab product={product} setProduct={setProduct} />
        )}

        {activeTab === "instruction" && (
          <InstructionTab product={product} setProduct={setProduct} />
        )}
      </div>

      <button className={s.saveBtn} onClick={saveProduct} disabled={loading}>
        {loading ? "Збереження..." : "Зберегти продукт"}
      </button>
    </div>
  );
};

export default Add;
