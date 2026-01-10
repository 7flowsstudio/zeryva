"use client";
import React, { useState } from "react";
import s from "./MapsCallback.module.css";
import CallbackForm from "@/components/Sections/UI/CallbackForm/CallbackForm";
import Link from "next/link";
import Portal from "@/components/Sections/UI/Portal/Portal";
import Modal from "@/components/Sections/UI/Modal/Modal";
import BlockMaps from "./BlockMaps/BlockMaps";

const MapsCallback = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			{" "}
			<section className={s.sectionMapCall}>
				<div className="container">
					<div className={s.mapCallWrapper}>
						<div className={s.mapWrapper}>
							<div className={s.overlayMaps}>
								<button
									type="button"
									className={s.btnFullScreen}
									onClick={() => setOpenModal(true)}
								>
									<svg className={s.iconFull}>
										<use href="/sprite.svg#icon-full-screen"></use>
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
							<Link
								href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%B0,+35,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0+%D0%9E%D0%BC%D0%B5%D0%BB%D1%8F%D0%BD%D0%B0,+%D0%A0%D1%96%D0%B2%D0%BD%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+35360/@50.5870851,26.118487,17z/data=!3m1!4b1!4m6!3m5!1s0x472f6d9a76acfea7:0xbd14bd128d1ff930!8m2!3d50.5870817!4d26.1210619!16s%2Fg%2F11rd4v_skt?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
								className={s.roadBtn}
								target="_blank"
							>
								Прокласти маршрут
							</Link>
						</div>
						<div className={s.callBack}>
							<CallbackForm />
						</div>
					</div>
				</div>
			</section>
			{openModal && (
				<Portal>
					<Modal closeModal={() => setOpenModal(false)}>
						<BlockMaps closeModal={() => setOpenModal(false)} />
					</Modal>
				</Portal>
			)}
		</>
	);
};

export default MapsCallback;
