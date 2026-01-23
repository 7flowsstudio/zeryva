"use client";
import Image from "next/image";
import React from "react";
import s from "./About.module.css";
import Link from "next/link";
import useScrollAnimation from "../../../../utils/UseScrollAnimation/useScrollAnimation";

const About = () => {
	const [aboutTitleRef, aboutTitleVisible] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean
	];
	return (
		<div className={`container ${s.heroCont}`}>
			<h2
				ref={aboutTitleRef}
				className={`${s.title} ${s.animateTitle} ${
					aboutTitleVisible ? s.visible : ""
				}`}
			>
				Технології, що працюють у полі
			</h2>
			<div className={s.mainCont}>
				<p className={s.textFirst}>
					Історія бренду «Зерива» розпочалася у 2013 році. Компанія з’явилася як
					відповідь на зростаючий запит українських аграріїв на якісні,
					ефективні та доступні біологічні рішення для рослинництва. З перших
					днів «Зерива» робить ставку на науковий підхід, власні розробки та
					практичні польові дослідження. Це допомогло швидко здобути довіру
					фермерів і агропідприємств по всій Україні.
				</p>
				<picture className={s.imgFirst}>
					<source media="(max-width: 767px)" srcSet="/about/mob_first.webp" />
					<source media="(min-width: 768px)" srcSet="/about/desc_first.webp" />
					<Image src="/about/desc_first.webp" alt="Agronomists" fill />
				</picture>
				<p className={s.textSec}>
					«Зерива» — український виробник мікробних і біологічних препаратів для
					живлення та захисту рослин. Продукція створюється за сучасними
					технологіями та спрямована на покращення стану ґрунту, стимуляцію
					розвитку агрокультур і стабільне збільшення врожайності. Компанія
					поєднує інновації, науковий підхід та практичний досвід, щоб
					забезпечити аграріїв дієвими, безпечними та економічно вигідними
					рішеннями для оптимізації врожайності та збереження родючості ґрунтів.
				</p>
				<picture className={s.imgSec}>
					<source media="(max-width: 767px)" srcSet="/about/mob_sec.webp" />
					<source media="(min-width: 768px)" srcSet="/about/desc_sec.webp" />
					<Image src="/about/desc_sec.webp" alt="Field" fill />
				</picture>
				<p className={s.textTh}>
					Команда спеціалістів бренду — агрономи, агрохіміки та біотехнологи —
					розробила лінійку біопрепаратів на основі результатів тривалих
					досліджень і спостережень у різних ґрунтово-кліматичних зонах. Кожен
					продукт «Зерива» створений з урахуванням потреб конкретної культури,
					її фази розвитку та можливих стресових факторів. Завдяки цьому аграрії
					отримують стабільно високі результати та покращують ефективність
					вирощування навіть у складних погодних умовах.
				</p>
				<Link href="/products" className={s.btnAbout}>
					Наша продукція
				</Link>
				{/* <button className={s.btnAbout}>Наша продукція</button> */}
			</div>
			{/* <button className={s.btnAbout}>Наша продукція</button> */}
		</div>
	);
};

export default About;
