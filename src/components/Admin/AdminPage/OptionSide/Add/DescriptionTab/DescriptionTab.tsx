import React, { useEffect, useRef } from "react";
import { Description, Product } from "../../../../../../../utils/types";
import s from "./DescriptionTab.module.css";
import ss from "../Add.module.css";

interface DescriptionTabProps {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

const FIELDS: (keyof Description)[] = [
  "composition",
  "purpose",
  "characteristics",
  "features",
  "form",
  "packaging",
  "shelfLife",
  "compatibility",
];

const PLACEHOLDERS: Record<keyof Description, string> = {
  composition: "Склад",
  purpose: "Мета застосування",
  characteristics: "Характеристика",
  features: "Особливості",
  form: "Форма випуску",
  packaging: "Пакування",
  shelfLife: "Термін придатності",
  compatibility: "Сумісність",
};

const DescriptionTab: React.FC<DescriptionTabProps> = ({
  product,
  setProduct,
}) => {
  const handleChange = (field: keyof Description, value: string) => {
    setProduct({
      ...product,
      description: { ...product.description, [field]: value },
    });
  };

  const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className={s.descrCont}>
      {FIELDS.map((field) => (
        <textarea
          key={field}
          className={ss.textarea}
          placeholder={PLACEHOLDERS[field]}
          value={product.description[field]}
          onChange={(e) => {
            autoResize(e);
            handleChange(field, e.target.value);
          }}
        />
      ))}
    </div>
  );
};

export default DescriptionTab;

// interface DescriptionTabProps {
//   product: Product;
//   setProduct: React.Dispatch<React.SetStateAction<Product>>;
// }

// const DescriptionTab: React.FC<DescriptionTabProps> = ({
//   product,
//   setProduct,
// }) => {
//   const handleChange = (field: keyof Description, value: string) => {
//     setProduct({
//       ...product,
//       description: {
//         ...product.description,
//         [field]: value,
//       },
//     });
//   };

//   const textareasRef = useRef<
//     Partial<Record<keyof Description, HTMLTextAreaElement>>
//   >({});

//   useEffect(() => {
//     (Object.keys(product.description) as (keyof Description)[]).forEach(
//       (key) => {
//         const el = textareasRef.current[key];
//         if (el) {
//           el.style.height = "auto";
//           el.style.height = `${el.scrollHeight}px`;
//         }
//       }
//     );
//   }, [product.description]);

//   return (
//     <div className={s.descrCont}>
//       <textarea
//         ref={(el) => {
//           textareasRef.current["composition"] = el!;
//         }}
//         className={ss.textarea}
//         placeholder="Склад"
//         value={product.description.composition}
//         onChange={(e) => {
//           e.target.style.height = "auto";
//           e.target.style.height = `${e.target.scrollHeight}px`;

//           handleChange("composition", e.target.value);
//         }}
//       />
//       <textarea
//         ref={(el) => {
//           textareasRef.current["purpose"] = el!;
//         }}
//         className={ss.textarea}
//         placeholder="Мета застосування"
//         value={product.description.purpose}
//         onChange={(e) => {
//           e.target.style.height = "auto";
//           e.target.style.height = `${e.target.scrollHeight}px`;
//           handleChange("purpose", e.target.value);
//         }}
//       />
//       <textarea
//         ref={(el) => {
//           textareasRef.current["characteristics"] = el!;
//         }}
//         className={ss.textarea}
//         placeholder="Характеристика"
//         value={product.description.characteristics}
//         onChange={(e) => {
//           e.target.style.height = "auto";
//           e.target.style.height = `${e.target.scrollHeight}px`;
//           handleChange("characteristics", e.target.value);
//         }}
//       />
//       <textarea
//         ref={(el) => {
//           textareasRef.current["features"] = el!;
//         }}
//         className={ss.textarea}
//         placeholder="Особливості"
//         value={product.description.features}
//         onChange={(e) => {
//           e.target.style.height = "auto";
//           e.target.style.height = `${e.target.scrollHeight}px`;
//           handleChange("features", e.target.value);
//         }}
//       />
//       <textarea
//         ref={(el) => {
//           textareasRef.current["form"] = el!;
//         }}
//         className={ss.textarea}
//         placeholder="Форма випуску"
//         value={product.description.form}
//         onChange={(e) => {
//           e.target.style.height = "auto";
//           e.target.style.height = `${e.target.scrollHeight}px`;
//           handleChange("form", e.target.value);
//         }}
//       />
//       <textarea
//         ref={(el) => {
//           textareasRef.current["packaging"] = el!;
//         }}
//         className={ss.textarea}
//         placeholder="Пакування"
//         value={product.description.packaging}
//         onChange={(e) => {
//           e.target.style.height = "auto";
//           e.target.style.height = `${e.target.scrollHeight}px`;
//           handleChange("packaging", e.target.value);
//         }}
//       />
//       <textarea
//         ref={(el) => {
//           textareasRef.current["shelfLife"] = el!;
//         }}
//         className={ss.textarea}
//         placeholder="Термін придатності"
//         value={product.description.shelfLife}
//         onChange={(e) => {
//           e.target.style.height = "auto";
//           e.target.style.height = `${e.target.scrollHeight}px`;
//           handleChange("shelfLife", e.target.value);
//         }}
//       />
//       <textarea
//         ref={(el) => {
//           textareasRef.current["compatibility"] = el!;
//         }}
//         className={ss.textarea}
//         placeholder="Сумісність"
//         value={product.description.compatibility}
//         onChange={(e) => {
//           e.target.style.height = "auto";
//           e.target.style.height = `${e.target.scrollHeight}px`;
//           handleChange("compatibility", e.target.value);
//         }}
//       />
//     </div>
//   );
// };

// export default DescriptionTab;
