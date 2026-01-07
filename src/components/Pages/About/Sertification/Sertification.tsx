import React from "react";
import s from "./Sertification.module.css";
import Image from "next/image";

const Sertification = () => {
	const sertificationList = [
		{
			id: 0,
			link: "/Page/About/Серт_ТОВ ЗЕРИВА_9001-2015_СУЯ.235-25 2.webp",
			text: "Сертифікат ISO",
		},
		{
			id: 1,
			link: "/Page/About/Серт_НААУ_ТОВ_ЗЕРИВА_9001_2015_8О108_CУЯ_507_25 1.webp",
			text: "Сертифікат ISO-2",
		},
	];

	const sertificationAll = [
		{
			id: 0,
			link: "/Page/About/РизоСтарт_compressed 1.webp",
			text: "Сертифікат «РизоСтарт»",
		},
		{
			id: 1,
			link: "/Page/About/Глеон_compressed 1.webp",
			text: "Сертифікат «Глеон»",
		},
		{
			id: 2,
			link: "/Page/About/Арія_compressed 1.webp",
			text: "Сертифікат «Арія»",
		},
		{
			id: 3,
			link: "/Page/About/Ризогумат_compressed 1.webp",
			text: "Сертифікат «РизоГумат»",
		},
		{
			id: 4,
			link: "/Page/About/Віолон_compressed 2.webp",
			text: "Сертифікат «Віолон»",
		},
		{
			id: 5,
			link: "/Page/About/Ризогумат_compressed 2.webp",
			text: "Сертифікат «Ризофос»",
		},
		{
			id: 6,
			link: "/Page/About/Фунгіблок_compressed 1.webp",
			text: "Сертифікат «Фунгіблок»",
		},
		{
			id: 7,
			link: "/Page/About/Деструмаг_compressed 1.webp",
			text: "Сертифікат «Деструмаг»",
		},
		{
			id: 8,
			link: "/Page/About/Бор-Молібден_compressed 1.webp",
			text: "Сертифікат «Zeryva B + Mo»",
		},
		{
			id: 9,
			link: "/Page/About/Мультимікс_compressed 1.webp",
			text: "Сертифікат «Zeryva Multimix»",
		},
		{
			id: 10,
			link: "/Page/About/Цинк_compressed 1.webp",
			text: "Сертифікат «Zeryva Zn»",
		},
		{
			id: 11,
			link: "/Page/About/Кальцій_compressed 1.webp",
			text: "Сертифікат «Zeryva CaO»",
		},
	];

	return (
		<section className={s.SectionSertification}>
			<div className="container">
				<div className={s.SertificationWrapper}>
					<div className={s.sertification}>
						<div className={s.textWrapper}>
							<h2 className={s.title}>
								Документальне підтвердження якості та безпеки біопрепаратів
							</h2>
							<h3 className={s.titleSmall}>
								Загальні сертифікати відповідності
							</h3>
							<p className={s.text}>
								Базові документи якості та безпеки виробництва
							</p>
						</div>
						<ul className={s.SertificationList}>
							{sertificationList.map((item) => (
								<li key={item.id} className={s.sertificationItem}>
									<Image
										src={item.link}
										width={180}
										height={255}
										alt={`sertification_${item.id}`}
										className={s.image}
									/>
									<p className={s.sertText}>{item.text}</p>
								</li>
							))}
						</ul>
					</div>
					<div className={s.sertificationAll}>
						<div className={s.textWrapperAll}>
							<h3 className={s.titleSmall}>
								Сертифікати відповідності на продукти
							</h3>
							<p className={s.text}>
								Документи для окремих препаратів асортименту
							</p>
						</div>
						<ul className={s.SertificationList}>
							{sertificationAll.map((item) => (
								<li key={item.id} className={s.sertificationItem}>
									<Image
										src={item.link}
										width={180}
										height={255}
										alt={`sertification_${item.id}`}
										className={s.image}
									/>
									<p className={s.sertText}>{item.text}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sertification;
