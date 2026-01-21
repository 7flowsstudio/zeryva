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
							Компанія пропонує лінійку препаратів у сухій та рідкій формах для
							комплексного догляду за агрокультурами. Уся продукція відповідає
							вимогам сертифікації та стандартам якості «ISO»
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
						<iframe
							src="https://www.youtube.com/embed/ho5njeMwxiQ"
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
