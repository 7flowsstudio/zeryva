"use client";
import React, { useEffect, useState } from "react";
import s from "./AddDealer.module.css";
import { Dealer, DealerWithId } from "../../../../../../utils/types";
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	updateDoc,
} from "firebase/firestore";
import { db } from "../../../../../../firebaseConfig";

type AddProps = {
	editDealer: DealerWithId | null;
	onSaved: () => void;
};

const AddDealer: React.FC<AddProps> = ({ editDealer, onSaved }) => {
	const [loading, setLoading] = useState(false);

	const [dealer, setDealer] = useState<Dealer>({
		name: "",
		phone: "",
		address: "",
	});

	useEffect(() => {
		if (editDealer) {
			setDealer(editDealer);
		}
	}, [editDealer]);

	const saveDealer = async () => {
		if (!dealer.name || !dealer.phone) {
			alert("Заповни назву і телефон");
			return;
		}

		try {
			setLoading(true);

			if (editDealer?.id) {
				await updateDoc(doc(db, "dealers", editDealer.id), { ...dealer });
				alert("оновлено ✅");
			} else {
				await addDoc(collection(db, "dealers"), {
					...dealer,
					createdAt: serverTimestamp(),
				});

				alert("Дилера додано ✅");

				// reset ТІЛЬКИ при створенні
				setDealer({
					name: "",
					phone: "",
					address: "",
				});
			}

			onSaved();
		} catch (e) {
			console.error(e);
			alert("Помилка збереження");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={s.wrapper}>
			<h2>Додати дилера</h2>
			<div className={s.content}>
				<div className={s.field}>
					<label className={s.label}>Дилер</label>
					<input
						className={s.inputD}
						placeholder="дилер"
						value={dealer.name}
						onChange={(e) =>
							setDealer({
								...dealer,
								name: e.target.value,
							})
						}
					/>
				</div>

				<div className={s.field}>
					<label className={s.label}>Телефон</label>
					<input
						className={s.inputD}
						type="tel"
						placeholder="телефон"
						value={dealer.phone}
						onChange={(e) =>
							setDealer({
								...dealer,
								phone: e.target.value,
							})
						}
					/>
				</div>

				<div className={s.field}>
					<label className={s.label}>Адреса</label>
					<input
						className={s.inputD}
						placeholder="адреса"
						value={dealer.address}
						onChange={(e) =>
							setDealer({
								...dealer,
								address: e.target.value,
							})
						}
					/>
				</div>
			</div>

			<button className={s.saveBtn} onClick={saveDealer} disabled={loading}>
				{loading ? "Збереження..." : "Зберегти дилера"}
			</button>
		</div>
	);
};

export default AddDealer;
