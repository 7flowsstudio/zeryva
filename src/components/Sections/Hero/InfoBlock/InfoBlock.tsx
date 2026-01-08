import React from "react";
import s from "./InfoBlock.module.css";
import Link from "next/link";

type HeroItem = {
	id: number;
	imgMob: string;
	img: string;
	title: string;
	description: string;
};

type InfoBlockProps = {
	item: HeroItem;
};

const InfoBlock: React.FC<InfoBlockProps> = ({ item }) => {
	return (
		<div className={`container ${s.infoWrapper}`}>
			<div className={s.infoContainer}>
				<h1 className={s.title}>{item.title}</h1>
				<h2 className={s.description}>{item.description}</h2>
				<Link
					href="https://drive.google.com/file/d/1PFw6ed9tHJiNI61ebCjlSbfmqubnkBa0/view"
					className={s.downloadBtn}
					target="_blank"
				>
					Завантажити каталог
				</Link>
			</div>
		</div>
	);
};

export default InfoBlock;
