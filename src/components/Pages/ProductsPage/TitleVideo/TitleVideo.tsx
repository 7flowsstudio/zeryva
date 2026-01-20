"use client";
import React, { useRef } from "react";
import s from "./TitleVideo.module.css";
import Link from "next/link";

const TitleVideo = () => {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const handlePlay = () => {
		if (!videoRef.current) return;
		videoRef.current.volume = 0.3;
	};

	return (
		<section className={s.sectionTitleVideo}>
			<div className="container">
				<div className={s.titleVideoWrapper}>
					<div className={s.description}>
						<h2 className={s.title}>Продукти «Зерива»</h2>
						<p className={s.text}>
							Компанія пропонує 18 препаратів у сухій та рідкій формі для
							комплексного догляду за агрокультурами. Всі товари відповідають
							стандартам сертифікатів відповідності
						</p>
						<Link
							href="/doc/katalog.pdf"
							className={s.downloadBtn}
							target="_blank"
						>
							Завантажити каталог
						</Link>
					</div>

					<div className={s.youtubePlayer}>
						<video
							ref={videoRef}
							src="/products/IMG_5259.MOV"
							controls
							playsInline
							onPlay={handlePlay}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TitleVideo;
