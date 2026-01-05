import React from "react";
import s from "./DescHeader.module.css";
import Image from "next/image";
import Link from "next/link";

const DescHeader = () => {
	const socialList = [
		{ id: 0, srs: "/sprite.svg#icon-instagram", href: "/" },
		{ id: 1, srs: "/sprite.svg#icon-tiktok", href: "/" },
		{ id: 2, srs: "/sprite.svg#icon-facebook", href: "/" },
		{ id: 3, srs: "/sprite.svg#icon-youtube", href: "/" },
	];
	const atherList = [
		{ id: 0, srs: "/sprite.svg#icon-watsapp", href: "/" },
		{ id: 1, srs: "/sprite.svg#icon-telegram", href: "/" },
	];

	const navList = [
		{ id: 0, srs: "/", text: "Про нас" },
		{ id: 1, srs: "/", text: "Продукти" },
		{ id: 2, srs: "/", text: "Послуги" },
		{ id: 3, srs: "/", text: "Контакти" },
	];
	return (
		<ul className={s.DescHeaderList}>
			<li className={s.topHead}>
				<div className={s.blockLogo}>
					<Link href="/">
						<Image
							src="/logo.svg"
							width={81}
							height={68}
							alt="logo"
							className={s.logoImage}
						/>
					</Link>

					<h4 className={s.logoText}>Природа, що працює на урожай</h4>
				</div>
				<ul className={s.socialList}>
					<li className={s.socialItem}>
						{socialList.map((item) => (
							<Link
								href={item.href}
								key={item.id}
								className={s.iconBlock}
								target="_blank"
							>
								<svg className={s.icon}>
									<use href={item.srs}></use>
								</svg>
							</Link>
						))}
					</li>
					<li className={s.phone}>
						<Link href="tel:+38 099 188 56 37">+38 099 188 56 37</Link>
					</li>
					<li className={s.atherSoc}>
						{atherList.map((item) => (
							<Link
								href={item.href}
								key={item.id}
								className={s.iconBlock}
								target="_blank"
							>
								<svg className={s.icon_a}>
									<use href={item.srs}></use>
								</svg>
							</Link>
						))}
					</li>
				</ul>
			</li>
			<li className={s.line}></li>
			<li className={s.botomHead}>
				<nav className={s.navigation}>
					{navList.map((item) => (
						<Link key={item.id} href={item.srs} className={s.link}>
							{item.text}
						</Link>
					))}
				</nav>
				<div className={s.searchBlock}>
					<div className={s.blockSearch}>
						<svg className={s.iconSearch}>
							<use href="/sprite.svg#icon-search"></use>
						</svg>
					</div>
					<input
						type="text"
						name="search"
						placeholder="Пошук..."
						className={s.input}
					/>
					<button type="button" className={s.searchBtn}>
						Знайти
					</button>
				</div>
			</li>
		</ul>
	);
};

export default DescHeader;
