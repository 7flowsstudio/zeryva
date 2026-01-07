import React from "react";
import s from "./About.module.css";
import BreadCrumbs from "@/components/Sections/UI/BreadCrumbs/BreadCrumbs";
import Efficiency from "./Efficiency/Efficiency";
import Advantages from "./Advantages/Advantages";
import KeyValues from "./KeyValues/KeyValues";
import Sertification from "./Sertification/Sertification";

const About = () => {
	return (
		<div className={s.aboutWrapper}>
			<BreadCrumbs
				crumbs={[{ label: "Головна", href: "/" }, { label: "Про нас" }]}
			/>
			<Efficiency />
			<Advantages />
			<KeyValues />
			<Sertification />
		</div>
	);
};

export default About;
