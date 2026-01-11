"use client";
import React, { useEffect, useState } from "react";
import s from "./Products.module.css";
import { Product, ProductWithId } from "../../../../../../utils/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../../firebaseConfig";

type ProductsProps = {
  onEdit: (product: ProductWithId) => void;
};

const Products: React.FC<ProductsProps> = ({ onEdit }) => {
  const [products, setProducts] = useState<ProductWithId[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const data: ProductWithId[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Product),
      }));
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.title}</span>
          <button onClick={() => onEdit(product)}>Редагувати</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
