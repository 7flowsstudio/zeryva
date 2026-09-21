import React from "react";
import s from "./Dylery.module.css";
import BreadCrumbs from "@/components/Sections/UI/BreadCrumbs/BreadCrumbs";
import Dylers from "./Dylers/Dylers";
import DylersList from "./DylersList/DylersList";

const Dylery = () => {
	return (
		<div className={s.servicesWrapper}>
			<BreadCrumbs
				crumbs={[{ label: "Головна", href: "/" }, { label: "Дилери" }]}
			/>
			<Dylers />
			<DylersList />
		</div>
	);
};

export default Dylery;
