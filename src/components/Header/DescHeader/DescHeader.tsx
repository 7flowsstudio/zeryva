import React from "react";
import s from "./DescHeader.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	atherList,
	navList,
	socialList,
} from "@/components/Sections/UI/data/data";

const DescHeader = () => {
	const pathname = usePathname();
	const isAther =
		pathname.startsWith("/about") || pathname.startsWith("/services");
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

					<h4 className={`${s.logoText} ${isAther ? s.colorGreen : ""}`}>
						Природа, що працює на урожай
					</h4>
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
									<use href={item.src}></use>
								</svg>
							</Link>
						))}
					</li>
					<li className={`${s.phone} ${isAther ? s.colorGreen : ""}`}>
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
								<svg className={`${s.icon_a} ${isAther ? s.icon_green : ""}`}>
									<use href={item.src}></use>
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
						<Link
							key={item.id}
							href={item.src}
							className={`${s.link} ${isAther ? s.colorGreen : ""}`}
						>
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
