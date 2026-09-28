import Link from "next/link";
import React from "react";
import s from "./Products.module.css";

const Products = () => {
	const prodList = [
		{ id: 0, src: "/inokulianty", text: "Інокулянти" },
		{ id: 1, src: "/bakterialni-kompleksy", text: "Бактеріальні комплекси" },
		{ id: 2, src: "/fitoprotektory", text: "Фітопротектори" },
		{ id: 3, src: "/stymuliatory-rostu", text: "Стимулятори росту" },
		{ id: 4, src: "/mikro-monodobryva", text: "Мікро-монодобрива" },
		{ id: 5, src: "/prylypachi-par", text: "Прилипачі (ПАР)" },
	];
	return (
		<div className={s.prodCont}>
			<h3 className={s.title}>Продукція</h3>
			<nav className={s.navigation}>
				{prodList.map((item) => (
					<Link key={item.id} href={item.src} className={s.link}>
						{item.text}
					</Link>
				))}
			</nav>
		</div>
	);
};

export default Products;
