import React from "react";
import s from "./ServicesList.module.css";
import { servicesList } from "@/components/Sections/UI/data/data";
import Image from "next/image";

const ServicesList = () => {
	return (
		<section className={s.servicesSection}>
			<div className="container">
				<div className={s.servicesWrapper}>
					<h2 className={s.title}>Що входить до послуг «Зерива:</h2>
					<div className={s.servicesBlock}>
						<ul className={s.servicesList}>
							{servicesList.map((item) => (
								<li key={item.id} className={s.servicesItem}>
									<div className={s.servicesIconBlock}>
										<svg className={s.iconServices}>
											<use href={item.src}></use>
										</svg>
									</div>
									<p className={s.text}>{item.text}</p>
								</li>
							))}
						</ul>
						<div className={s.lastServicesItem}>
							<div className={s.textBlock}>
								<p className={s.text}>
									Послуги орієнтовані на фермерські господарства та
									агропідприємства, які прагнуть підвищити ефективність
									виробництва, оптимізувати витрати та отримувати прогнозований
									результат у реальних польових умовах.
								</p>
							</div>

							<div className={s.imageWrapper}>
								<Image
									src="/Page/Services/nikolett.webp"
									fill
									sizes="100vw"
									alt="image_nikollet"
									className={s.image}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesList;
