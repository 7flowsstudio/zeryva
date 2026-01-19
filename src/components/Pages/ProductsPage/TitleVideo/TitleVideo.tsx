"use client";
import React from "react";
import s from "./TitleVideo.module.css";
import Link from "next/link";

const TitleVideo = () => {
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
							href="https://drive.google.com/file/d/1PFw6ed9tHJiNI61ebCjlSbfmqubnkBa0/view"
							className={s.downloadBtn}
							target="_blank"
						>
							Завантажити каталог
						</Link>
					</div>

					<div className={s.youtubePlayer}>
						<iframe
							src="https://www.youtube.com/embed/jvt1CJ0kdLw"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TitleVideo;

// https://www.youtube.com/watch?v=jvt1CJ0kdLw
