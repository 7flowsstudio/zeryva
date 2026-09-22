"use client";
import Image from "next/image";
import React from "react";
import s from "./About.module.css";
import Link from "next/link";
import useScrollAnimation from "../../../../utils/UseScrollAnimation/useScrollAnimation";

const About = () => {
	const [aboutTitleRef, aboutTitleVisible] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	const [t1Ref, t1Vis] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	const [i1Ref, i1Vis] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];

	const [t2Ref, t2Vis] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	const [i2Ref, i2Vis] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];

	const [t3Ref, t3Vis] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	return (
		<div className={`container ${s.heroCont}`}>
			<div className={s.mainCont}>
				<div>
					<h2
						ref={aboutTitleRef}
						className={`${s.title} ${s.animateTitle} ${
							aboutTitleVisible ? s.visible : ""
						}`}
					>
						Zeryva — партнер, який працює поруч з аграріями
					</h2>
					<p
						ref={t1Ref}
						className={`${s.textFirst} ${s.fromLeft} ${t1Vis ? s.visible : ""}`}
					>
						Zeryva — український виробник біологічних препаратів для живлення та
						захисту рослин. Ми не обмежуємося лише виробництвом препаратів.
						Команда Zeryva супроводжує фермерів у реальних умовах господарства —
						від підбору рішення та розробки схеми застосування до виїзду на поле
						й оцінки результатів.
					</p>
					<p
						ref={t3Ref}
						className={`${s.textSec} ${s.fromRight} ${t3Vis ? s.visible : ""}`}
					>
						Ми відкрито показуємо практичний досвід, ділимося результатами
						застосування та постійно вдосконалюємо рішення разом із тими, хто
						працює із землею щодня.
					</p>
					<Link href="/produkty" className={s.btnAbout}>
						Наша продукція
					</Link>
				</div>

				<div>
					<picture
						ref={i1Ref}
						className={`${s.imgFirst} ${s.fromRight} ${i1Vis ? s.visible : ""}`}
					>
						<source
							media="(max-width: 767px)"
							srcSet="/about/about_ceo_mob.webp"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/about/about_ceo_desc.webp"
						/>
						<Image src="/about/about_ceo_desc.webp" alt="CEO" fill />
					</picture>
					<div
						ref={i2Ref}
						className={`${s.contText} ${s.fromRight} ${i2Vis ? s.visible : ""}`}
					>
						<div>
							<Image
								src="/about/svg.png"
								alt=""
								width={44}
								height={33}
								className={s.elem}
							/>
						</div>
						<div>
							<p className={s.textImg}>
								Zeryva — це синергія живої науки та агротехнологій для захисту,
								живлення й максимальної прибутковості кожного гектара
							</p>
							<p className={s.textName}>Крук Василь</p>
							<span className={s.textC}>СЕО «Зерива»</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
