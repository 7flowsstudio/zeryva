"use client";

import React, { useEffect, useState } from "react";

import s from "./DylersList.module.css";

import useScrollAnimation from "../../../../../utils/UseScrollAnimation/useScrollAnimation";

import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { db } from "../../../../../firebaseConfig";

import { Dealer } from "../../../../../utils/types";

type DealerWithId = Dealer & {
	id: string;
};

const DylersList = () => {
	const [servicesBlockRef, servicesBlockVisible] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];

	const [dealers, setDealers] = useState<DealerWithId[]>([]);

	useEffect(() => {
		const fetchDealers = async () => {
			try {
				const q = query(collection(db, "dealers"), orderBy("createdAt", "asc"));

				const snapshot = await getDocs(q);

				const data: DealerWithId[] = snapshot.docs.map((doc) => ({
					id: doc.id,
					...(doc.data() as Dealer),
				}));

				setDealers(data);
			} catch (error) {
				console.error("Помилка при отриманні дилерів:", error);
			}
		};

		fetchDealers();
	}, []);

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
						{dealers.map((item) => (
							<li key={item.id} className={s.servicesItem}>
								<h3 className={s.title}>{item.name}</h3>

								<ul className={s.infoList}>
									{item.website && (
										<li className={s.infoItem}>
											<span className={s.boldText}>Веб-сайт:</span>

											<a
												href={
													item.website.startsWith("https://")
														? item.website
														: `http://${item.website}`
												}
												className={s.text}
												target="_blank"
												rel="noopener noreferrer"
											>
												{item.website}
											</a>
										</li>
									)}

									{item.phone && (
										<li className={s.infoItem}>
											<span className={s.boldText}>Телефон:</span>

											<p className={s.text}>{item.phone}</p>
										</li>
									)}

									{item.address && (
										<li className={s.infoItem}>
											<span className={s.boldText}>Адреса:</span>

											<p className={s.text}>{item.address}</p>
										</li>
									)}
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
