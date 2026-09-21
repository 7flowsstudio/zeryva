"use client";
import React from "react";
import s from "./DylersList.module.css";
import useScrollAnimation from "../../../../../utils/UseScrollAnimation/useScrollAnimation";
import dilersList from "@/lib/dilers.json";

const DylersList = () => {
	const [servicesBlockRef, servicesBlockVisible] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	return (
		<section className={s.servicesSection}>
			<div className="container">
				<div
					ref={servicesBlockRef}
					className={`${s.servicesBlock} ${s.animateBlock} ${
						servicesBlockVisible ? s.visible : ""
					}`}
				>
					<ul className={s.servicesList}>
						{dilersList.map((item) => (
							<li key={item.id} className={s.servicesItem}>
								<h3 className={s.title}>{item.title}</h3>
								<ul className={s.infoList}>
									{item["web-site"] && (
										<li className={s.infoItem}>
											<span className={s.boldText}>Веб-сайт:</span>
											<a
												href={
													item["web-site"].startsWith("https://")
														? `https://${item["web-site"]}`
														: `http://${item["web-site"]}`
												}
												className={s.text}
												target="_blank"
												rel="noopener noreferrer"
											>
												{item["web-site"]}
											</a>
										</li>
									)}
									<li className={s.infoItem}>
										<span className={s.boldText}>Телефон:</span>
										<p className={s.text}>{item.phone}</p>
									</li>
									<li className={s.infoItem}>
										<span className={s.boldText}>Адреса:</span>
										<p className={s.text}>{item.address}</p>
									</li>
								</ul>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default DylersList;
