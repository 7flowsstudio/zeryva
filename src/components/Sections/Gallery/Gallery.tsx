"use client";
import s from "./Gallery.module.css";
import { galleryImages } from "@/data/gallery/gallery";
import Image from "next/image";
import useSlider from "../../../../utils/useSlider";
import useScrollAnimation from "../../../../utils/UseScrollAnimation/useScrollAnimation";

const Gallery = () => {
	const { listRef, thumbRef, scrollSmooth } = useSlider();
	const [i1Ref, i1Vis] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];

	return (
		<div className={`container ${s.gallCont}`}>
			<h2 className={s.titleGal}>Zeryva в реальних господарствах</h2>
			<p className={s.textGal}>
				Працюємо разом із фермерами — від консультації до результату
			</p>
			<div ref={i1Ref} className={`${s.fromRight} ${i1Vis ? s.visible : ""}`}>
				<ul className={s.gallery} ref={listRef}>
					{galleryImages.map((image) => (
						<li className={s.item} key={image.src}>
							<button type="button">
								<Image
									src={image.src}
									alt={image.alt}
									fill
									className={s.image}
								/>
							</button>
						</li>
					))}
				</ul>
			</div>
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

export default Gallery;
