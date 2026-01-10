import React from "react";
import s from "./BlockMaps.module.css";

const BlockMaps = ({ closeModal }: { closeModal: () => void }) => {
	return (
		<div className={s.overlayMaps}>
			<button
				type="button"
				className={s.btnSmallScreen}
				onClick={() => closeModal()}
			>
				<svg className={s.iconSmall}>
					<use href="/sprite.svg#icon-small-screen"></use>
				</svg>
			</button>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28660.434685061646!2d26.08724172742902!3d50.58533404776613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f6d9a76acfea7%3A0xbd14bd128d1ff930!2z0LLRg9C70LjRhtGPINCo0LXQstGH0LXQvdC60LAsIDM1LCDQktC10LvQuNC60LAg0J7QvNC10LvRj9C90LAsINCg0ZbQstC90LXQvdGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgMzUzNjA!5e0!3m2!1sru!2spl!4v1767994205677!5m2!1sru!2spl"
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				className={s.maps}
			></iframe>
		</div>
	);
};

export default BlockMaps;
