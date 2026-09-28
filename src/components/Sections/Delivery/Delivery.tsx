"use client";
import React from "react";
import s from "./Delivery.module.css";
import Image from "next/image";
import Link from "next/link";
import useScrollAnimation from "../../../../utils/UseScrollAnimation/useScrollAnimation";

const Delivery = () => {
	const [i1Ref, i1Vis] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	const [i2Ref, i2Vis] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];

	return (
		<div className={`container ${s.delivCont}`}>
			<div
				ref={i1Ref}
				className={`${s.wrapp} ${s.fromLeft} ${i1Vis ? s.visible : ""}`}
			>
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
			<div
				ref={i2Ref}
				className={`${s.wrapp} ${s.fromRight} ${i2Vis ? s.visible : ""}`}
			>
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
