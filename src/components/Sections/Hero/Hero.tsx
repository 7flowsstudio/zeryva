"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import s from "./Hero.module.css";
import Image from "next/image";
import InfoBlock from "./InfoBlock/InfoBlock";

const Hero = () => {
	const HeroImg = [
		{
			id: 0,
			imgMob: "/hero/first_mob_1.webp",
			img: "/hero/first_1.webp",
			title: "Інноваційні підходи",
			description: "До природного та стійкого розвитку культур",
		},
		{
			id: 1,
			imgMob: "/hero/second_mob_1.webp",
			img: "/hero/second_1.webp",
			title: "Унікальні біопрепарати",
			description: "Для розкриття потенціалу врожайності ",
		},
		{
			id: 2,
			imgMob: "/hero/third_mob_1.webp",
			img: "/hero/third_1.webp",
			title: "Розробка і виробництво",
			description: "Добрив нового покоління",
		},
		{
			id: 3,
			imgMob: "/hero/last_mob_1.webp",
			img: "/hero/last_1.webp",
			title: "Чесне партнерство",
			description: "Та підтримка на кожному етапі",
		},
	];

	return (
		<div id="hero" className={s.sliderContainer}>
			<Swiper
				className={s.swiper}
				navigation={{
					nextEl: ".hero-next",
					prevEl: ".hero-prev",
				}}
				modules={[Pagination, Navigation]}
				loop={true}
				breakpoints={{
					320: { slidesPerView: 1, spaceBetween: 4 },
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
					</SwiperSlide>
				))}
			</Swiper>
			<div className={s.paginationBlock}>
				<button className={`hero-prev ${s.navButton} ${s.prevButton}`}>
					<svg className={s.navButton_icon}>
						<use href="/sprite.svg#icon-arrow-top-right"></use>
					</svg>
				</button>
				<button className={`hero-next ${s.navButton} ${s.nextButton}`}>
					<svg className={`${s.navButton_icon} ${s.right}`}>
						<use href="/sprite.svg#icon-arrow-top-right"></use>
					</svg>
				</button>
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
