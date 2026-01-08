"use client";
import React, { useEffect, useState } from "react";
import s from "./Products.module.css";
import Image from "next/image";
import Link from "next/link";
import { Product, ProductWithId } from "../../../../../utils/types";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../../../firebaseConfig";
import Card from "./Card/Card";

const Products = () => {
  const [products, setProducts] = useState<ProductWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const q = query(collection(db, "products"), orderBy("createdAt", "desc"));

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

  return (
    <div>
      <h1>Продукти</h1>

      <div style={{ display: "grid", gap: 24 }}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
