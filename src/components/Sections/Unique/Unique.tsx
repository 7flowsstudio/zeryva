"use client";
import React, { useState } from "react";
import s from "./Unique.module.css";
import useScrollAnimation from "../../../../utils/UseScrollAnimation/useScrollAnimation";
import Image from "next/image";
const Unique = () => {
	const [aboutTitleRef, aboutTitleVisible] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	const [i1Ref, i1Vis] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	return (
		<div className={`container ${s.wrappUnique}`}>
			<div
				ref={i1Ref}
				className={`${s.imgFirst} ${s.fromRight} ${i1Vis ? s.visible : ""}`}
			>
				<div className={s.contText}>
					<h2
						ref={aboutTitleRef}
						className={`${s.title} ${s.animateTitle} ${
							aboutTitleVisible ? s.visible : ""
						}`}
					>
						Наша комплексна підтримка:
					</h2>
					<ul className={s.list}>
						<li className={s.item}>
							<div className={s.wrapp}>
								<Image src="/unique/icon1.svg" alt="" width={32} height={32} />
								<h4>Виїзд агронома в господарство</h4>
							</div>
							<p className={s.text}>
								Агроном оцінює умови безпосередньо в господарстві та надає
								практичні рекомендації щодо застосування продукції
							</p>
							<span>Безкоштовно</span>
						</li>
						<li className={s.item}>
							<div className={s.wrapp}>
								<Image src="/unique/icon2.svg" alt="" width={32} height={32} />
								<h4>Агрономічна консультація</h4>
							</div>
							<p className={s.text}>
								Допомагаємо визначити потребу господарства, підібрати рішення
								Zeryva та пояснюємо порядок застосування
							</p>
							<span>Безкоштовно</span>
						</li>
						<li className={s.item}>
							<div className={s.wrapp}>
								<Image src="/unique/icon3.svg" alt="" width={32} height={32} />
								<h4>Розробка технологічної карти вирощування</h4>
							</div>
							<p className={s.text}>
								Готуємо технологічну карту під культуру, поле, кліматичні умови,
								цілі та ресурси господарства
							</p>
							<span>Безкоштовно</span>
						</li>
						<li className={s.item}>
							<div className={s.wrapp}>
								<Image src="/unique/icon4.svg" alt="" width={32} height={32} />
								<h4>Прозорість результатів</h4>
							</div>
							<p className={s.text}>
								Відкрита публікація результатів застосування препаратів у
								соцмережах
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Unique;
