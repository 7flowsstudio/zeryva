"use client";
import React, { useEffect, useState } from "react";
import { Product, ProductWithId } from "../../../../../utils/types";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../../../firebaseConfig";
import Card from "./Card/Card";
import s from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState<ProductWithId[]>([]);
  const [loading, setLoading] = useState(true);

  const productTypes = [
    "Всі",
    "Інокулянти",
    "Контроль патогенів",
    "Деструктори",
    "Стимулятори росту",
    "Мікро-монодобрива",
    "Прилипачі (ПАР)",
  ] as const;

  const [selectedProductType, setSelectedProductType] = useState<string>("Всі");
  const [selectedFormTypes, setSelectedFormTypes] = useState<string[]>([]); // масив чекбоксів

  useEffect(() => {
    const fetchProducts = async () => {
      const q = query(collection(db, "products"), orderBy("createdAt", "asc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Product),
      }));

      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Завантаження...</p>;

  // фільтрація
  const filteredProducts = products.filter((p) => {
    const matchType =
      selectedProductType === "Всі" || p.productType === selectedProductType;
    const matchForm =
      selectedFormTypes.length === 0 || selectedFormTypes.includes(p.formType);
    return matchType && matchForm;
  });

  return (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        {productTypes.map((type) => (
          <button
            key={type}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border:
                selectedProductType === type
                  ? "2px solid #333"
                  : "1px solid #ccc",
              background: selectedProductType === type ? "#eee" : "#fff",
              cursor: "pointer",
            }}
            onClick={() => setSelectedProductType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        {["Сухі", "Рідкі"].map((form) => (
          <label
            key={form}
            style={{ display: "flex", alignItems: "center", gap: 4 }}
          >
            <input
              type="checkbox"
              checked={selectedFormTypes.includes(form)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedFormTypes([...selectedFormTypes, form]);
                } else {
                  setSelectedFormTypes(
                    selectedFormTypes.filter((f) => f !== form)
                  );
                }
              }}
            />
            {form}
          </label>
        ))}
      </div>

      <div className={s.prodList}>
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
