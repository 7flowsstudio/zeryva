import React, { useEffect, useState } from "react";
import s from "./BtnConsultation.module.css";
import Portal from "../Portal/Portal";
import dynamic from "next/dynamic";
const Consultation = dynamic(() => import("../Consultation/Consultation"), {
	ssr: false,
});
import Link from "next/link";
import { socialList } from "../../UI/data/data";

type IsScroledProp = {
	isScrolled?: boolean;
};

const BtnConsultation = ({ isScrolled }: IsScroledProp) => {
	const [openModal, setOpenModal] = useState(false);
	const [isFooterVisible, setIsFooterVisible] = useState(false);

	useEffect(() => {
		const footer = document.getElementById("footer");

		if (!footer) return;

		const observer = new IntersectionObserver(([entry]) => {
			setIsFooterVisible(entry.isIntersecting);
		});

		observer.observe(footer);

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<ul
				className={`${s.socialList} ${
					isScrolled ? s.socialListVisible : ""
				} ${isFooterVisible ? s.hiddenNearFooter : ""}`}
			>
				{socialList.map((item) => (
					<li key={item.id} className={s.socialItem}>
						<Link href={item.href} target="_blank">
							<svg className={s.icon}>
								<use href={item.src}></use>
							</svg>
						</Link>
					</li>
				))}
			</ul>
			<button
				type="button"
				className={s.elipse}
				onClick={() => setOpenModal(true)}
			>
				Замовити консультацію
			</button>
			{openModal && (
				<Portal>
					<Consultation setOpenModal={setOpenModal} />
				</Portal>
			)}
		</>
	);
};

export default BtnConsultation;
