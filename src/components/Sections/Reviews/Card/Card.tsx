"use client";
import Image from "next/image";
import s from "./Card.module.css";

type Review = {
	image: string;
	name: string;
	location: string;
	text: string;
};

type CardProps = {
	review: Review;
};

const Card = ({ review }: CardProps) => {
	return (
		<li className={s.card}>
			<div className={s.wrapp}>
				<Image src={review.image} alt={review.name} width={78} height={78} />
				<div className={s.textCont}>
					<h3 className={s.name}>{review.name}</h3>
					<p className={s.location}>{review.location}</p>
				</div>
			</div>
			<p className={s.text}>{review.text}</p>
		</li>
	);
};

export default Card;
