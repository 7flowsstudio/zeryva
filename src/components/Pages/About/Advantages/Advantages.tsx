import React from "react";
import s from "./Advantages.module.css";
import Image from "next/image";

const Advantages = () => {
	const advantagesList = [
		{
			id: 0,
			img: "",
			icon: "sprite.svg#icon-microscope",
			title: "Сучасні технології з доведеною ефективністю",
			text: "Кожен продукт проходить повний цикл перевірки — від лабораторних досліджень до польових випробувань",
		},
		{
			id: 1,
			img: "",
			icon: "sprite.svg#icon-regenerative",
			title: "Адаптація до конкретних умов господарства",
			text: "Продукти підбираються з урахуванням культури, типу ґрунту та кліматичних особливостей регіону",
		},
		{
			id: 2,
			img: "",
			icon: "sprite.svg#icon-drop-minus",
			title: "Зменшення хімічного навантаження",
			text: "Ви економите на хімічних препаратах та отримуєте вищий урожай — у кожному колосі, стручку та кілограмі зібраного зерна",
		},
		{
			id: 3,
			img: "",
			icon: "sprite.svg#icon-subtract",
			title: "Стійкість культур до стресових факторів",
			text: "Посіви краще переносять приморозки, погодні коливання та інші стресові фактори. Рослини залишаються здоровими та добре розвиненим",
		},
		{
			id: 4,
			img: "/Page/About/corn.webp",
			icon: "",
			title: "",
			text: "",
		},
		{
			id: 5,
			img: "",
			icon: "sprite.svg#icon-agriculture",
			title: "Комплексний агрономічний супровід",
			text: "Компанія гарантує професійну підтримку — від консультації до впровадження технологій у полі",
		},
		{
			id: 6,
			img: "",
			icon: "sprite.svg#icon-streamline",
			title: "Оптимізація врожайного потенціалу та витрат",
			text: "Препарати «Зерива» сприяють отриманню високих показників у полі та раціональному використанню ресурсів",
		},
		{
			id: 7,
			img: "/Page/About/sunflower.webp",
			icon: "",
			title: "",
			text: "",
		},
	];

	return (
		<section className={s.Advantages}>
			<div className="container">
				<div className={s.AdvantagesWrapper}>
					<h2 className={s.title}>Чому аграрії обирають «Зерива»</h2>
					<ul className={s.AdvantagesList}>
						{advantagesList.map((item) => (
							<li key={item.id} className={s.advantagesItem}>
								{item.img ? (
									<div className={s.imageWrapper}>
										<Image
											src={item.img}
											fill
											sizes="100vw"
											alt="img_prob"
											className={s.image}
										/>
									</div>
								) : (
									<div className={s.AdvantagesBlock}>
										<div className={s.top}>
											<div className={s.iconBlock}>
												<svg className={s.icon}>
													<use href={item.icon}></use>
												</svg>
											</div>
											<h5 className={s.titleBlock}>{item.title}</h5>
										</div>

										<p className={s.text}>{item.text}</p>
									</div>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Advantages;
