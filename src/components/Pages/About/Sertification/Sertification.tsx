"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import s from "./Sertification.module.css";
import Image from "next/image";
import {
	sertificationAll,
	sertificationList,
} from "@/components/Sections/UI/data/data";

type Config = {
	itemsPerClick: number;
	visibleCount: number;
};

const INITIAL_CONFIG: Config = {
	itemsPerClick: 4,
	visibleCount: 8,
};

const getConfigByWidth = (): Config => {
	const width = window.innerWidth;

	if (width <= 767) return { itemsPerClick: 2, visibleCount: 4 };
	if (width <= 1279) return { itemsPerClick: 3, visibleCount: 6 };
	return { itemsPerClick: 4, visibleCount: 8 };
};

const Sertification = ({
	setImage,
}: {
	setImage: React.Dispatch<SetStateAction<string>>;
}) => {
	const [config, setConfig] = useState<Config>(INITIAL_CONFIG);
	const { itemsPerClick, visibleCount } = config;

	useEffect(() => {
		const applyConfig = () => {
			setConfig(getConfigByWidth());
		};

		applyConfig(); // ✔️ після mount — без hydration проблем
		window.addEventListener("resize", applyConfig);

		return () => window.removeEventListener("resize", applyConfig);
	}, []);

	const addItem = () => {
		setConfig((prev) => ({
			...prev,
			visibleCount: prev.visibleCount + prev.itemsPerClick,
		}));
	};

	const resetItem = () => {
		setConfig(getConfigByWidth());
	};

	return (
		<section className={s.SectionSertification}>
			<div className="container">
				<div className={s.SertificationWrapper}>
					<div className={s.sertification}>
						<div className={s.textWrapper}>
							<h2 className={s.title}>
								Документальне підтвердження якості та безпеки біопрепаратів
							</h2>
							<h3 className={s.titleSmall}>
								Загальні сертифікати відповідності
							</h3>
							<p className={s.text}>
								Базові документи якості та безпеки виробництва
							</p>
						</div>

						<ul className={s.SertificationList}>
							{sertificationList.map((item) => (
								<li key={item.id} className={s.sertificationItem}>
									<Image
										src={item.link}
										width={180}
										height={255}
										alt={`sertification_${item.id}`}
										className={s.image}
										onClick={() => setImage(item.link)}
									/>
									<p className={s.sertText}>{item.text}</p>
								</li>
							))}
						</ul>
					</div>

					<div className={s.sertificationAll}>
						<div className={s.textWrapperAll}>
							<h3 className={s.titleSmall}>
								Сертифікати відповідності на продукти
							</h3>
							<p className={s.text}>
								Документи для окремих препаратів асортименту
							</p>
						</div>

						<ul className={s.SertificationList}>
							{sertificationAll.slice(0, visibleCount).map((item) => (
								<li key={item.id} className={s.sertificationItem}>
									<Image
										src={item.link}
										width={180}
										height={255}
										alt={`sertification_${item.id}`}
										className={`${s.image} ${s.image_s}`}
										onClick={() => setImage(item.link)}
									/>
									<p className={s.sertText}>{item.text}</p>
								</li>
							))}
						</ul>

						<button
							type="button"
							className={s.moreSertification}
							onClick={
								visibleCount < sertificationAll.length ? addItem : resetItem
							}
						>
							{visibleCount < sertificationAll.length
								? "Дивитись всі сертифікати"
								: "На початок"}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sertification;
