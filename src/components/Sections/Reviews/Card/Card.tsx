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
		<div className={s.cardWrapp}>
			<li className={s.card}>
				<Image src={review.image} alt={review.name} width={78} height={78} />
				<h3 className={s.title}>{review.name}</h3>
				<p className={s.description}>{review.location}</p>
				<p className={s.price}>{review.text}</p>
			</li>
		</div>
	);
};

export default Card;
