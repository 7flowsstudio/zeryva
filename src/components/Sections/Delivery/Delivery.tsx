"use client";
import React from "react";
import s from "./Delivery.module.css";
import Image from "next/image";
import Link from "next/link";

const Delivery = () => {
	return (
		<div className={`container ${s.delivCont}`}>
			<div className={s.wrapp}>
				<h2 className={s.title}>Швидка доставка по всій Україні</h2>
				<p className={s.text}>
					Продукція “Зерива” доступна для продажу по всій території України.
					Знайдіть найближчого дилера та дізнайтеся більше про продукцію й умови
					придбання.
				</p>
				<Link href="/dylery" className={s.btnDeliv}>
					Наші дилери
				</Link>
			</div>
			<div>
				<Image
					className={s.imgMap}
					src="/delivery/map.png"
					alt="map"
					fill
				></Image>
			</div>
		</div>
	);
};
export default Delivery;
