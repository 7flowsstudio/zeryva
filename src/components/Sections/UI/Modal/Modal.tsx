import React, { SetStateAction } from "react";
import s from "./Modal.module.css";

type ModalProps = {
	children: React.ReactNode;
	setImage?: React.Dispatch<SetStateAction<string>>;
	closeModal?: () => void;
};

const Modal = ({ children, setImage, closeModal }: ModalProps) => {
	const hundlerClose = () => {
		setImage?.("");
		closeModal?.();
	};
	return (
		<div className={s.modal} onClick={hundlerClose}>
			<div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
				<div className={s.scrollContainer}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
