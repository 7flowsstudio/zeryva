"use client";
import React, { useState } from "react";
import s from "./Unique.module.css";
import useScrollAnimation from "../../../../utils/UseScrollAnimation/useScrollAnimation";
const Unique = () => {
	const [aboutTitleRef, aboutTitleVisible] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	const [i1Ref, i1Vis] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean,
	];
	return (
		<div className={`container ${s.wrappUnique}`}>
			<div
				ref={i1Ref}
				className={`${s.imgFirst} ${s.fromRight} ${i1Vis ? s.visible : ""}`}
			>
				<h2
					ref={aboutTitleRef}
					className={`${s.title} ${s.animateTitle} ${
						aboutTitleVisible ? s.visible : ""
					}`}
				></h2>
			</div>
		</div>
	);
};

export default Unique;
