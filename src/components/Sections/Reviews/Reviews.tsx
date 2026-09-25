"use client";
import s from "./Reviews.module.css";
import { galleryImages } from "@/data/gallery/gallery";
import Image from "next/image";
import useSlider from "../../../../utils/useSlider";

const Reviews = () => {
	const { listRef, thumbRef, scrollSmooth } = useSlider();

	return (
		<div className={`container ${s.revCont}`}>
			<h2 className={s.titleRev}>Що говорять наші клієнти</h2>
			<p className={s.textRev}>
				Підтверджені результати аграріїв, які використовували препарати Zeryva
			</p>
			{/* <ul className={s.reviews} ref={listRef}>
				{galleryImages.map((image) => (
					<li className={s.item} key={image.src}>
						<button type="button">
							<Image src={image.src} alt={image.alt} fill className={s.image} />
						</button>
					</li>
				))}
			</ul> */}
			<div className={s.sliderControls}>
				<button onClick={() => scrollSmooth("left")} className={s.navButton}>
					<svg className={s.arrLeft}>
						<use href="/sprite.svg#icon-hero-arrow-left"></use>
					</svg>
				</button>
				<button onClick={() => scrollSmooth("right")} className={s.navButton}>
					<svg className={s.arrRight}>
						<use href="/sprite.svg#icon-hero-arrow-left"></use>
					</svg>
				</button>
			</div>
			<div className={s.scrollbar}>
				<div ref={thumbRef} className={s.thumb} />
			</div>
		</div>
	);
};

export default Reviews;
