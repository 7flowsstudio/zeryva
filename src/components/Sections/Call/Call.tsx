"use client";
import React, { useState } from "react";
import s from "./Call.module.css";
import Image from "next/image";
import Portal from "../Hero/Portal/Portal";
import Consultation from "../Hero/Consultation/Consultation";

const Call = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={s.wrappCall}>
      <div className={s.callCont}>
        <div className={s.wrappTitle}>
          <h2 className={s.title}>
            Сильніші рослини – стабільний <span>урожай!</span>
          </h2>
          <button
            type="button"
            className={s.btnCall}
            onClick={() => setOpenModal(true)}
          >
            Замовити консультацію
          </button>
          {openModal && (
            <Portal>
              <Consultation setOpenModal={setOpenModal} />
            </Portal>
          )}
        </div>
        <picture className={s.img}>
          <source media="(max-width: 767px)" srcSet="/call/img_mob_4.webp" />
          <source media="(min-width: 768px)" srcSet="/call/img_desc_4.webp" />
          <Image src="/call/img_desc_4.webp" alt="Field" fill />
        </picture>
      </div>
    </div>
  );
};

export default Call;
