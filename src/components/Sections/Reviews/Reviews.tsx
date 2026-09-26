"use client";
import s from "./Reviews.module.css";
import useSlider from "../../../../utils/useSlider";
import Card from "./Card/Card";
import { cards } from "@/data/reviews/reviews";

const Reviews = () => {
	const { listRef, thumbRef, scrollSmooth } = useSlider();

	return (
		<div className={`container ${s.revCont}`}>
			<h2 className={s.titleRev}>Що говорять наші клієнти</h2>
			<p className={s.textRev}>
				Підтверджені результати аграріїв, які використовували препарати Zeryva
			</p>
			<ul className={s.reviews} ref={listRef}>
				{cards.map((review) => (
					<Card key={review.name} review={review} />
				))}
			</ul>
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
