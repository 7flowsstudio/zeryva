"use client";
import React, { useEffect, useState } from "react";
import s from "./Dealers.module.css";
import { Dealer, DealerWithId } from "../../../../../../utils/types";
import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	orderBy,
	query,
} from "firebase/firestore";
import { db } from "../../../../../../firebaseConfig";

type DealersProps = {
	onEdit: (dealers: DealerWithId) => void;
};

const Dealers: React.FC<DealersProps> = ({ onEdit }) => {
	const [dealers, setDealers] = useState<DealerWithId[]>([]);

	useEffect(() => {
		const fetchDealers = async () => {
			const q = query(collection(db, "dealers"), orderBy("createdAt", "asc"));
			const snapshot = await getDocs(q);
			const data: DealerWithId[] = snapshot.docs.map((doc) => ({
				id: doc.id,
				...(doc.data() as Dealer),
			}));
			setDealers(data);
		};
		fetchDealers();
	}, []);

	const handleDelete = async (id: string) => {
		await deleteDoc(doc(db, "dealers", id));
		setDealers((prev) => prev.filter((p) => p.id !== id));
	};

	return (
		<div className={s.cont}>
			<h2>Всі дилери</h2>
			<div className={s.wrappCont}>
				{dealers.map((dealer) => (
					<div className={s.item} key={dealer.id}>
						<p className={s.name}>{dealer.name}</p>
						<div className={s.btnsWrapp}>
							<button className={s.btn} onClick={() => onEdit(dealer)}>
								Редагувати
							</button>
							<button
								className={s.btnDel}
								onClick={() => handleDelete(dealer.id)}
							>
								Видалити
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dealers;
