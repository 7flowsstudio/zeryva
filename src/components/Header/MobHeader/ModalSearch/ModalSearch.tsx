import React, { useState } from "react";
import s from "./ModalSearch.module.css";

type ModalSearchProps = {
	onClose: () => void;
};

const ModalSearch: React.FC<ModalSearchProps> = ({ onClose }) => {
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = () => {
		setIsClosing(true);
	};

	const handleAnimationEnd = () => {
		if (isClosing) {
			onClose();
		}
	};
	return (
		<div
			className={`${s.modalSearchWrapper} ${isClosing ? s.closing : s.opening}`}
			onAnimationEnd={handleAnimationEnd}
		>
			<div className={s.searchBlock}>
				<div className={s.blockIconSearch}>
					<svg className={s.iconSearch}>
						<use href="/sprite.svg#icon-search"></use>
					</svg>
				</div>
				<input name="search" type="text" className={s.input}></input>
				<button type="button" className={s.closeSearch} onClick={handleClose}>
					<svg className={s.iconClose}>
						<use href="/sprite.svg#icon-close-search"></use>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default ModalSearch;
