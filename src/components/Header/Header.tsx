"use client";
import React from "react";
import s from "./Header.module.css";
import DescHeader from "./DescHeader/DescHeader";
import MobHeader from "./MobHeader/MobHeader";

type IsScroledProp = {
	isScrolled?: boolean;
};

const Header = ({ isScrolled }: IsScroledProp) => {
	return (
		<div className={`${s.header} ${isScrolled ? s.scrolled : ""}`}>
			<div className="container">
				<div className={s.headerBlock}>
					<DescHeader />
					<MobHeader isScrolled={isScrolled} />
				</div>
			</div>
		</div>
	);
};

export default Header;
