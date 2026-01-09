import Image from "next/image";
import React from "react";
import { Product } from "../../../../../../../utils/types";
import axios from "axios";
import s from "./MainTab.module.css";

interface MainTabProps {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

const MainTab: React.FC<MainTabProps> = ({ product, setProduct }) => {
  // Додати нове фото
  const uploadImage = async (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file)); // ключ "files" співпадає з бекендом

    const { data } = await axios.post("/api/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setProduct((prev) => ({
      ...prev,
      images: [...prev.images, ...data.urls], // додаємо всі URL
    }));
  };

  const removeImage = (index: number) => {
    setProduct((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const uploadCertificate = async (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file)); // ключ "files" співпадає з бекендом

    const { data } = await axios.post("/api/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setProduct((prev) => ({
      ...prev,
      certificates: [...prev.certificates, ...data.urls],
    }));
  };
  const removeCertificate = (index: number) => {
    setProduct((prev) => ({
      ...prev,
      certificates: prev.certificates.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className={s.mainCont}>
      <input
        placeholder="Назва продукту"
        value={product.title}
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
      />

      <textarea
        placeholder="Опис продукту"
        value={product.descriptionText}
        onChange={(e) =>
          setProduct({ ...product, descriptionText: e.target.value })
        }
      />

      <input
        placeholder="Ціна"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />

      <input
        placeholder="YouTube відео (URL)"
        value={product.youtubeUrl}
        onChange={(e) => setProduct({ ...product, youtubeUrl: e.target.value })}
      />

      <h4>Фото</h4>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => {
          const files = e.target.files;
          if (files) uploadImage(Array.from(files));
        }}
      />

      {product.images.map((img, i) => (
        <div key={i}>
          <Image src={img} alt="" width={80} height={80} />
          <button type="button" onClick={() => removeImage(i)}>
            Видалити
          </button>
        </div>
      ))}

      <h4>Сертифікати</h4>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => {
          const files = e.target.files;
          if (files) uploadCertificate(Array.from(files));
        }}
      />

      {product.certificates.map((cert, i) => (
        <div key={i}>
          <Image src={cert} alt={`Certificate ${i}`} width={80} height={80} />
          <button type="button" onClick={() => removeCertificate(i)}>
            Видалити
          </button>
        </div>
      ))}

      <h4>Властивості продукту</h4>

      <input
        placeholder="Консистенція"
        value={product.properties.consistency}
        onChange={(e) =>
          setProduct({
            ...product,
            properties: {
              ...product.properties,
              consistency: e.target.value,
            },
          })
        }
      />

      <input
        placeholder="Обʼєм"
        value={product.properties.volume}
        onChange={(e) =>
          setProduct({
            ...product,
            properties: {
              ...product.properties,
              volume: e.target.value,
            },
          })
        }
      />

      <input
        placeholder="Термін придатності"
        value={product.properties.shelfLife}
        onChange={(e) =>
          setProduct({
            ...product,
            properties: {
              ...product.properties,
              shelfLife: e.target.value,
            },
          })
        }
      />

      <input
        placeholder="Температура зберігання"
        value={product.properties.storageTemp}
        onChange={(e) =>
          setProduct({
            ...product,
            properties: {
              ...product.properties,
              storageTemp: e.target.value,
            },
          })
        }
      />
      <label>
        <input
          type="checkbox"
          checked={product.isBestseller}
          onChange={(e) =>
            setProduct({ ...product, isBestseller: e.target.checked })
          }
        />
        Бестселлер
      </label>
      <h4>Обрати варіанти для фільтрації на сторінці з продуктами</h4>
      <select
        value={product.formType}
        onChange={(e) =>
          setProduct({
            ...product,
            formType: e.target.value as "Сухі" | "Рідкі",
          })
        }
      >
        <option value="Сухі">Сухі</option>
        <option value="Рідкі">Рідкі</option>
      </select>

      <select
        value={product.productType}
        onChange={(e) =>
          setProduct({
            ...product,
            productType: e.target.value as
              | "Інокулянти"
              | "Контроль патогенів"
              | "Деструктори"
              | "Стимулятори росту"
              | "Мікро-монодобрива"
              | "Прилипачі (ПАР)",
          })
        }
      >
        <option value="Інокулянти">Інокулянти</option>
        <option value="Контроль патогенів">Контроль патогенів</option>
        <option value="Деструктори">Деструктори</option>
        <option value="Стимулятори росту">Стимулятори росту</option>
        <option value="Мікро-монодобрива">Мікро-монодобрива</option>
        <option value="Прилипачі (ПАР)">Прилипачі (ПАР)</option>
      </select>
    </div>
  );
};

export default MainTab;
