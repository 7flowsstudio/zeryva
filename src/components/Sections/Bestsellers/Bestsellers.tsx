"use client";
import React, { useRef } from "react";
import s from "./Bestsellers.module.css";
import products from "./best.json";
import { BestsellerItem } from "./BestsellerItem/BestsellerItem";
import { useSmoothScroll } from "../../../../utils/useSmoothScroll";
import Image from "next/image";
import { useCustomScrollbar } from "../../../../utils/useCustomScrollbar";

const Bestsellers = () => {
  //   const containerRef = useRef<HTMLUListElement | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useCustomScrollbar(listRef, thumbRef);

  const { scrollSmooth } = useSmoothScroll(listRef, {
    slidesToScroll: 1,
    gap: 20,
    duration: 500,
  });
  return (
    <div className={`container ${s.bestsCont}`}>
      <div>
        <h2 className={s.title}>Хіти продажу</h2>
        <p className={s.text}>
          Препарати, що стабільно підвищують врожайність і економлять час та
          ресурси
        </p>

        <ul className={s.list} ref={listRef}>
          {products.map((p) => (
            <BestsellerItem key={p.id} product={p} />
          ))}
        </ul>

        <div className={s.sliderControls}>
          <button onClick={() => scrollSmooth("left")} className={s.navButton}>
            <Image
              className={s.arrLeft}
              src="/bestsellers/left.svg"
              alt="Left"
              width={48}
              height={48}
            />
          </button>
          <button onClick={() => scrollSmooth("right")} className={s.navButton}>
            <Image
              className={s.arrRight}
              src="/bestsellers/right.svg"
              alt="Right"
              width={48}
              height={48}
            />
          </button>
        </div>
        <div className={s.scrollbar}>
          <div ref={thumbRef} className={s.thumb} />
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
