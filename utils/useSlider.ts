import { useRef } from "react";
import { useCustomScrollbar } from "./useCustomScrollbar";
import { useSmoothScroll } from "./useSmoothScroll";

const useSlider = () => {
	const listRef = useRef<HTMLUListElement>(null);
	const thumbRef = useRef<HTMLDivElement>(null);

	useCustomScrollbar(listRef, thumbRef);

	const { scrollSmooth } = useSmoothScroll(listRef, {
		slidesToScroll: 1,
		gap: 20,
		duration: 500,
	});

	return {
		listRef,
		thumbRef,
		scrollSmooth,
	};
};

export default useSlider;
