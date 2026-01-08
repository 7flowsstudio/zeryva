import React, { SetStateAction } from "react";
import s from "./Modal.module.css";

type ModalProps = {
	children: React.ReactNode;
	setImage: React.Dispatch<SetStateAction<string>>;
};

const Modal = ({ children, setImage }: ModalProps) => {
	return (
		<div className={s.modal} onClick={() => setImage("")}>
			<div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
				<div className={s.scrollContainer}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
