import s from "./Loader.module.css";

type LoaderProps = {
	size?: "small" | "medium" | "large";
};

export default function Loader({ size = "medium" }: LoaderProps) {
	return (
		<div className={s.container}>
			<span
				className={`${s.spinner} ${s[size]}`}
				role="status"
				aria-label="Завантаження"
			/>
		</div>
	);
}
