import React from "react";
import s from "./KeyValues.module.css";

const KeyValues = () => {
	const keyValues = [
		{
			id: 0,
			icon: "/sprite.svg#icon-key-values-1",
			text: "Орієнтація на збалансований розвиток культур на всіх етапах росту",
		},
		{
			id: 1,
			icon: "/sprite.svg#icon-key-values-2",
			text: "Науковий підхід і постійний розвиток через дослідження та інновації",
		},
		{
			id: 2,
			icon: "/sprite.svg#icon-key-values-3",
			text: "Фокус на реальному ефекті в польових умовах",
		},
		{
			id: 3,
			icon: "/sprite.svg#icon-key-values-4",
			text: "Відкритість і довіра у довгостроковому партнерстві з аграріями",
		},
	];
	return (
		<section className={s.SectionKeyValues}>
			<div className="container">
				<div className={s.KeyValuesWrapper}>
					<h2 className={s.title}>Наші ключові цінності</h2>
					<ul className={s.KeyValuesList}>
						{keyValues.map((item) => (
							<li key={item.id} className={s.KeyValuesItem}>
								<div className={s.iconBlock}>
									<svg className={`${s.icon} ${item.id === 0 ? s.icon_1 : ""}`}>
										<use href={item.icon}></use>
									</svg>
								</div>
								<p className={s.text}>{item.text}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default KeyValues;
