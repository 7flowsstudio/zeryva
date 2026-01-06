import React, { useState } from "react";
import s from "./ModalMobMenu.module.css";
import Image from "next/image";
import Link from "next/link";

type ModalMobMenuProps = {
	onClose: () => void;
};

const ModalMobMenu: React.FC<ModalMobMenuProps> = ({ onClose }) => {
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = () => {
		setIsClosing(true);
	};

	const handleAnimationEnd = () => {
		if (isClosing) {
			onClose();
		}
	};

	const menuMob = [
		{ id: 0, name: "Про нас", link: "/" },
		{ id: 1, name: "Продукти", link: "/" },
		{ id: 2, name: "Послуги", link: "/" },
		{ id: 3, name: "Контакти", link: "/" },
	];

	const messengerList = [
		{ id: 0, src: "/sprite.svg#icon-watsapp", link: "/" },
		{ id: 1, src: "/sprite.svg#icon-telegram", link: "/" },
	];

	const socLink = [
		{ id: 0, src: "/sprite.svg#icon-instagram", link: "/" },
		{ id: 1, src: "/sprite.svg#icon-tiktok-mob", link: "/" },
		{ id: 2, src: "/sprite.svg#icon-facebook", link: "/" },
		{ id: 3, src: "/sprite.svg#icon-youtube-mob", link: "/" },
	];
	return (
		<div
			className={`${s.mobMenuWrapper} ${isClosing ? s.closing : s.opening}`}
			onAnimationEnd={handleAnimationEnd}
		>
			<div className={s.head}>
				<div className={s.logoBlock}>
					<Image
						src="/logo.svg"
						width={45}
						height={38}
						alt="logo"
						className={s.image}
					/>
					<h4 className={s.logoText}>Природа, що працює на урожай</h4>
				</div>
				<button type="button" className={s.closeBtn} onClick={handleClose}>
					<svg className={s.iconClose}>
						<use href="/sprite.svg#icon-close-search"></use>
					</svg>
				</button>
			</div>
			<div className={s.line}></div>
			<ul className={s.menuList}>
				{menuMob.map((item) => (
					<li key={item.id} className={s.menuItem}>
						<Link href={item.link}>{item.name}</Link>
					</li>
				))}
			</ul>
			<div className={s.line}></div>
			<div className={s.contactWrapper}>
				<div className={s.messengers}>
					<h5 className={s.name}>Телефон:</h5>
					<div className={s.listWrapper}>
						<Link href="tel:+38 099 188 56 37" className={s.link}>
							+38 099 188 56 37
						</Link>
						<ul className={s.messengersList}>
							{messengerList.map((item) => (
								<li key={item.id} className={s.messengersItem}>
									<Link href={item.link} target="_blank">
										<svg className={s.iconMessengers}>
											<use href={item.src}></use>
										</svg>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className={s.socialAndUpload}>
					<div className={s.social}>
						<h5 className={s.name}>Соціальні мережі</h5>
						<ul className={s.socList}>
							{socLink.map((item) => (
								<li key={item.id} className={s.socItem}>
									<Link href={item.link} target="_blank">
										<svg className={s.iconSoc}>
											<use href={item.src}></use>
										</svg>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<button type="button" className={s.btnUpload}>
						Завантажити каталог
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalMobMenu;
