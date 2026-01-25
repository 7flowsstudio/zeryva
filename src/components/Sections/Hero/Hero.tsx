"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import s from "./Hero.module.css";
import Image from "next/image";
import InfoBlock from "./InfoBlock/InfoBlock";
import HeroImg from "./HeroInfo.json";
// import BtnConsultation from "./BtnConsultation/BtnConsultation";

const Hero = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const slidesCount = HeroImg.length;
	const isDesktop =
		typeof window !== "undefined" &&
		window.matchMedia("(min-width: 1280px)").matches;

	return (
		<div id="hero" className={s.sliderContainer}>
			<Swiper
				className={s.swiper}
				navigation={{
					nextEl: ".hero-next",
					prevEl: ".hero-prev",
				}}
				onSlideChange={(swiper) => {
					setActiveIndex(swiper.realIndex);
				}}
				modules={[Navigation, Autoplay]}
				loop={true}
				autoplay={
					isDesktop
						? {
								delay: 4000,
								disableOnInteraction: false,
								pauseOnMouseEnter: true,
						  }
						: false
				}
				breakpoints={{
					320: { slidesPerView: 1, spaceBetween: 0 },
				}}
			>
				{HeroImg?.map((item, index) => (
					<SwiperSlide key={index} className={s.slide}>
						<div className={s.imageWrapper}>
							<picture>
								<source media="(max-width: 767px)" srcSet={item.imgMob} />
								<source media="(min-width: 768px)" srcSet={item.img} />
								<Image src={item.img} alt="hero_img" fill className={s.image} />
							</picture>
						</div>
						<InfoBlock item={item} />
						{/* <BtnConsultation /> */}
					</SwiperSlide>
				))}
			</Swiper>
			<div className={s.paginationBlock}>
				<div className={s.blockBtn}>
					<button className={`hero-prev ${s.navButton}`}>
						<svg className={s.navButton_icon}>
							<use href="/sprite.svg#icon-hero-arrow-left"></use>
						</svg>
					</button>
					<button className={`hero-next ${s.navButton}`}>
						<svg className={`${s.navButton_icon} ${s.right}`}>
							<use href="/sprite.svg#icon-hero-arrow-left"></use>
						</svg>
					</button>
				</div>
				<div className={s.progressBar}>
					<div
						className={s.progressFill}
						style={{
							left: `${activeIndex * (100 / slidesCount)}%`,
							width: `${100 / slidesCount}%`,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;

{
	/* <picture>
	<source media="(max-width: 767px)" srcSet="/hero/first_mob.webp" />
	<source media="(min-width: 768px)" srcSet="/hero/first.webp" />
	<Image src="/hero/first.webp" alt="hero_img" fill className={s.image} />
</picture>; */
}
