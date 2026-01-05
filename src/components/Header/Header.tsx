"use client";
import React, { useEffect, useState } from "react";
import s from "./Header.module.css";
import DescHeader from "./DescHeader/DescHeader";
import MobHeader from "./MobHeader/MobHeader";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	console.log("ISSCROLED", isScrolled);

	useEffect(() => {
		const scrollContainer = document.getElementById("app-scroll");
		if (!scrollContainer) return;

		const handleScroll = () => {
			setIsScrolled(scrollContainer.scrollTop > 80);
		};

		scrollContainer.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => scrollContainer.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={`container ${s.headerWrapper} ${isScrolled ? s.scrolled : ""}`}
		>
			<div className={s.headerBlock}>
				<DescHeader />
				<MobHeader />
			</div>
		</div>
	);
};

export default Header;
