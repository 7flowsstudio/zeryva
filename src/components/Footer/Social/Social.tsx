import Link from "next/link";
import React from "react";
import s from "./Social.module.css";

const Social = () => {
  const socialList = [
    { id: 0, srs: "/sprite.svg#icon-instagram", href: "/" },
    { id: 1, srs: "/sprite.svg#icon-tiktok-mob", href: "/" },
    { id: 2, srs: "/sprite.svg#icon-facebook", href: "/" },
    { id: 3, srs: "/sprite.svg#icon-youtube-mob", href: "/" },
  ];
  return (
    <div>
      <h3 className={s.title}>Соціальні мережі</h3>
      <div className={s.socialItem}>
        {socialList.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className={s.iconBlock}
            target="_blank"
          >
            <svg className={s.icon}>
              <use href={item.srs}></use>
            </svg>
          </Link>
        ))}
      </div>
      {/* <button className={s.btnSoc}>Завантажити каталог</button> */}
      <Link
        href="https://drive.google.com/file/d/1PFw6ed9tHJiNI61ebCjlSbfmqubnkBa0/view"
        className={s.btnSoc}
        target="_blank"
      >
        Завантажити каталог
      </Link>
    </div>
  );
};

export default Social;
