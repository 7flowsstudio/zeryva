import Image from "next/image";
import React from "react";
import { Product } from "../../../../../../../utils/types";

interface MainTabProps {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

const MainTab: React.FC<MainTabProps> = ({ product, setProduct }) => {
  // Додати нове фото
  const addImage = (url: string) => {
    setProduct({ ...product, images: [...product.images, url] });
  };

  // Видалити фото за індексом
  const removeImage = (index: number) => {
    setProduct({
      ...product,
      images: product.images.filter((_, i) => i !== index),
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Назва продукту"
        value={product.title}
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
      />

      <input
        type="number"
        placeholder="Ціна"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />

      <input
        type="text"
        placeholder="Посилання на YouTube відео"
        value={product.youtubeUrl}
        onChange={(e) => setProduct({ ...product, youtubeUrl: e.target.value })}
      />

      <h4>Фотографії</h4>
      {product.images.map((img, index) => (
        <div key={index}>
          <Image src={img} alt={`Product ${index}`} width={100} />
          <button type="button" onClick={() => removeImage(index)}>
            Видалити
          </button>
        </div>
      ))}
      <input
        type="text"
        placeholder="URL нового фото"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            const target = e.target as HTMLInputElement;
            if (target.value.trim()) {
              addImage(target.value.trim());
              target.value = "";
            }
          }
        }}
      />

      <h4>Властивості продукту</h4>
      <input
        type="text"
        placeholder="Консистенція"
        value={product.properties.consistency}
        onChange={(e) =>
          setProduct({
            ...product,
            properties: { ...product.properties, consistency: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="Об’єм"
        value={product.properties.volume}
        onChange={(e) =>
          setProduct({
            ...product,
            properties: { ...product.properties, volume: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="Термін придатності"
        value={product.properties.shelfLife}
        onChange={(e) =>
          setProduct({
            ...product,
            properties: { ...product.properties, shelfLife: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="Температура зберігання"
        value={product.properties.storageTemp}
        onChange={(e) =>
          setProduct({
            ...product,
            properties: { ...product.properties, storageTemp: e.target.value },
          })
        }
      />
    </div>
  );
};

export default MainTab;
