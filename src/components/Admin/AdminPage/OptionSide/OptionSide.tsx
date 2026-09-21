"use client";
import React from "react";
import s from "./OptionSide.module.css";
import Add from "./Add/Add";
import Products from "./Products/Products";
// import { AdminSection } from "../MenuSide/MenuSide";
import { DealerWithId, ProductWithId } from "../../../../../utils/types";
import Dealers from "./Dealers/Dealers";
import { AdminSection } from "../AdminPage";
import AddDealer from "./AddDealer/AddDealer";

type OptionSideProps = {
	active: AdminSection;
	editProduct: ProductWithId | null;
	setEditProduct: (p: ProductWithId | null) => void;
	setActive: (v: AdminSection) => void;
	editDealer: DealerWithId | null;
	setEditDealer: (d: DealerWithId | null) => void;
};

const OptionSide = ({
	active,
	editProduct,
	setEditProduct,
	setActive,
	editDealer,
	setEditDealer,
}: OptionSideProps) => {
	if (active === "add")
		return (
			<div className={s.optionSideWrapper}>
				<Add
					editProduct={editProduct}
					onSaved={() => {
						setEditProduct(null);
						setActive("products");
					}}
				/>
			</div>
		);
	if (active === "products")
		return (
			<div className={s.optionSideWrapper}>
				<Products
					onEdit={(product) => {
						setEditProduct(product);
						setActive("add");
					}}
				/>
			</div>
		);
	if (active === "addDealer") {
		return (
			<div className={s.optionSideWrapper}>
				<AddDealer
					editDealer={editDealer}
					onSaved={() => {
						setActive("dealers");
					}}
				/>
			</div>
		);
	}

	if (active === "dealers") {
		return (
			<div className={s.optionSideWrapper}>
				<Dealers
					onEdit={(dealer) => {
						setEditDealer(dealer);
						setActive("addDealer");
					}}
				/>
			</div>
		);
	}
	return null;
};

export default OptionSide;
