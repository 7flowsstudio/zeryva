import Link from "next/link";
import React from "react";
import s from "./Navigation.module.css";

const Navigation = () => {
  const navList = [
    { id: 0, srs: "/about", text: "Про нас" },
    { id: 1, srs: "/products", text: "Продукти" },
    { id: 2, srs: "/services", text: "Послуги" },
    { id: 3, srs: "/contacts", text: "Контакти" },
  ];
  return (
    <div className={s.navigationCont}>
      <h3 className={s.title}>Навігація</h3>
      <nav className={s.navigation}>
        {navList.map((item) => (
          <Link key={item.id} href={item.srs} className={s.link}>
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
