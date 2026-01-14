"use client";
import React, { useEffect, useState } from "react";
import s from "./Products.module.css";
import { Product, ProductWithId } from "../../../../../../utils/types";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../../../../firebaseConfig";

type ProductsProps = {
  onEdit: (product: ProductWithId) => void;
};

const Products: React.FC<ProductsProps> = ({ onEdit }) => {
  const [products, setProducts] = useState<ProductWithId[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const q = query(collection(db, "products"), orderBy("createdAt", "asc"));
      const snapshot = await getDocs(q);
      const data: ProductWithId[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Product),
      }));
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className={s.cont}>
      <h2>Всі продукти</h2>
      {products.map((product) => (
        <div className={s.wrapp} key={product.id}>
          <p className={s.name}>{product.title}</p>
          <button className={s.btn} onClick={() => onEdit(product)}>
            Редагувати
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
