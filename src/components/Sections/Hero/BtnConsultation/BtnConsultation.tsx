import React, { useState } from "react";
import s from "./BtnConsultation.module.css";
import Portal from "../Portal/Portal";
import Consultation from "../Consultation/Consultation";

const BtnConsultation = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<button
				type="button"
				className={s.elipse}
				onClick={() => setOpenModal(true)}
			>
				Замовити консультацію
			</button>
			{openModal && (
				<Portal>
					<Consultation setOpenModal={setOpenModal} />
				</Portal>
			)}
		</>
	);
};

export default BtnConsultation;
