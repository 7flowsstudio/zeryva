import React, { useState } from "react";
import s from "./InfoBlock.module.css";
import Portal from "../../UI/Portal/Portal";
import Consultation from "../Consultation/Consultation";

type HeroItem = {
	id: number;
	imgMob: string;
	img: string;
	title: string;
	description: string;
};

type InfoBlockProps = {
	item: HeroItem;
	isClone?: boolean;
};

const InfoBlock: React.FC<InfoBlockProps> = ({ item, isClone = false }) => {
	const handleDownload = () => {
		window.open("/doc/katalog.pdf", "_blank", "noopener,noreferrer");
	};
	const [openModal, setOpenModal] = useState(false);
	console.log("ItemID)", item.title);
	return (
		<div className={`container ${s.infoWrapper}`}>
			<div className={s.infoContainer}>
				{!isClone && (
					<>
						{item.id === 0 ? (
							<h1 className={s.title}>{item.title}</h1>
						) : (
							<h2 className={s.title}>{item.title}</h2>
						)}
					</>
				)}
				{!isClone && <h2 className={s.description}>{item.description}</h2>}

				<div className={s.wrappBtns}>
					<button
						type="button"
						className={s.downloadBtn}
						onClick={handleDownload}
					>
						Завантажити каталог
					</button>
					<button
						type="button"
						className={s.downloadBtnCons}
						onClick={() => setOpenModal(true)}
					>
						Замовити консультацію
					</button>
				</div>
			</div>
			{openModal && (
				<Portal>
					<Consultation setOpenModal={setOpenModal} />
				</Portal>
			)}
		</div>
	);
};

export default InfoBlock;
