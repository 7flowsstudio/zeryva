import React, { useState } from "react";
import s from "./MobHeader.module.css";
import Image from "next/image";
import Link from "next/link";
import ModalSearch from "./ModalSearch/ModalSearch";
import ModalMobMenu from "./ModalMobMenu/ModalMobMenu";

type MobMenuProp = {
	isScrolled: boolean;
};

const MobHeader = ({ isScrolled }: MobMenuProp) => {
	const [openSearch, setOpenSearch] = useState(false);
	const [openMobMenu, setOpenMobMenu] = useState(false);
	const socList = [
		{ id: 0, src: "/sprite.svg#icon-instagram", link: "/" },
		{ id: 1, src: "/sprite.svg#icon-tiktok", link: "/" },
		{ id: 2, src: "/sprite.svg#icon-facebook", link: "/" },
		{ id: 3, src: "/sprite.svg#icon-youtube", link: "/" },
	];
	return (
		<>
			<ul className={s.mobHeader}>
				<li className={s.mobHeaderTop}>
					<div className={s.mobLogoBlock}>
						<Image
							src="/logo.svg"
							width={45}
							height={38}
							alt="image"
							className={s.image}
						/>
						<h4 className={s.titleMob}>Природа, що працює на урожай</h4>
					</div>
					<button
						type="button"
						className={`${s.burgerBtn} ${isScrolled ? s.scrollBtn : ""}`}
						onClick={() => setOpenMobMenu(true)}
					>
						<svg className={s.iconBurger}>
							<use href="/sprite.svg#icon-button-mob"></use>
						</svg>
					</button>
				</li>
				<li className={s.line}></li>
				<li className={s.mobHeaderBotom}>
					<button
						type="button"
						className={s.searchBtn}
						onClick={() => setOpenSearch(true)}
					>
						<svg className={s.iconSearch}>
							<use href="/sprite.svg#icon-search-mob"></use>
						</svg>
					</button>
					<div className={s.socIconBlock}>
						{socList.map((item) => (
							<Link key={item.id} href={item.link} className={s.socLink}>
								<svg className={s.socIconMob}>
									<use href={item.src}></use>
								</svg>
							</Link>
						))}
					</div>
				</li>
			</ul>
			{openSearch && <ModalSearch onClose={() => setOpenSearch(false)} />}
			{openMobMenu && <ModalMobMenu onClose={() => setOpenMobMenu(false)} />}
		</>
	);
};

export default MobHeader;
