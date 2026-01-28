"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "./Hero.module.css";
import InfoBlock from "./InfoBlock/InfoBlock";
import HeroImg from "./HeroInfo.json";

const AUTOPLAY_DELAY = 5000;

const Hero = () => {
	const slides = HeroImg;
	const slidesCount = slides.length;

	// +2 через clone
	const extendedSlides = [slides[slidesCount - 1], ...slides, slides[0]];

	const [index, setIndex] = useState(1); // ⬅ старт НЕ з 0
	const [withTransition, setWithTransition] = useState(true);
	const timerRef = useRef<number | null>(null);

	const isDesktop =
		typeof window !== "undefined" &&
		window.matchMedia("(min-width: 1280px)").matches;

	const nextSlide = () => {
		setIndex((prev) => prev + 1);
	};

	const prevSlide = () => {
		setIndex((prev) => prev - 1);
	};

	// autoplay
	useEffect(() => {
		if (!isDesktop) return;
		timerRef.current = window.setInterval(nextSlide, AUTOPLAY_DELAY);
		return () => {
			if (timerRef.current !== null) {
				clearInterval(timerRef.current);
			}
		};
	}, [isDesktop]);

	// 🧠 ключова магія infinite loop
	useEffect(() => {
		if (index === slidesCount + 1) {
			// дійшли до клону першого
			setTimeout(() => {
				setWithTransition(false);
				setIndex(1);
			}, 600); // = transition duration
		}

		if (index === 0) {
			// дійшли до клону останнього
			setTimeout(() => {
				setWithTransition(false);
				setIndex(slidesCount);
			}, 600);
		}
	}, [index, slidesCount]);

	// повертаємо transition назад
	useEffect(() => {
		if (!withTransition) {
			requestAnimationFrame(() => {
				setWithTransition(true);
			});
		}
	}, [withTransition]);

	// реальний активний індекс для progress
	const realIndex =
		index === 0 ? slidesCount - 1 : index === slidesCount + 1 ? 0 : index - 1;

	return (
		<div id="hero" className={s.sliderContainer}>
			<div
				className={s.track}
				style={{
					transform: `translateX(-${index * 100}%)`,
					transition: withTransition ? "transform 0.6s ease" : "none",
				}}
			>
				{extendedSlides.map((item, i) => (
					<div key={i} className={s.slide}>
						<div className={s.imageWrapper}>
							<Image
								src={item.img}
								alt="hero_img"
								fill
								priority={i === 1}
								className={s.image}
							/>
						</div>
						<InfoBlock item={item} />
					</div>
				))}
			</div>

			{/* CONTROLS */}
			<div className={s.paginationBlock}>
				<div className={s.blockBtn}>
					<button onClick={prevSlide} className={s.navButton}>
						<svg className={s.navButton_icon}>
							<use href="/sprite.svg#icon-hero-arrow-left"></use>
						</svg>
					</button>

					<button onClick={nextSlide} className={s.navButton}>
						<svg className={`${s.navButton_icon} ${s.right}`}>
							<use href="/sprite.svg#icon-hero-arrow-left"></use>
						</svg>
					</button>
				</div>

				<div className={s.progressBar}>
					<div
						className={s.progressFill}
						style={{
							left: `${realIndex * (100 / slidesCount)}%`,
							width: `${100 / slidesCount}%`,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
