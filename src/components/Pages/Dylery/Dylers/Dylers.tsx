"use client";
import React from "react";
import s from "./Dylers.module.css";
import Image from "next/image";
import useScrollAnimation from "../../../../../utils/UseScrollAnimation/useScrollAnimation";

const Dylers = () => {
	const [aboutTitleRef, aboutTitleVisible] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	return (
		<section className={s.dylersSection}>
			<div className="container">
				<div className={s.dylerWrapper}>
					<div className={s.description}>
						<h2
							ref={aboutTitleRef}
							className={`${s.title} ${s.animateTitle} ${
								aboutTitleVisible ? s.visible : ""
							}`}
						>
							Наші дилери
						</h2>
						<p className={s.text}>
							Офіційні партнери Zeryva допоможуть підібрати необхідну продукцію
							та уточнити умови придбання. Оберіть зручного для вас партнера у
							своєму регіоні та зв’яжіться з ним напряму.
						</p>
					</div>
					<div className={s.imageWrapper}>
						<Image
							src="/Page/Dylery/Sunflower.webp"
							fill
							sizes="100vw"
							alt="image_sunflower"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dylers;
