import { ReactNode } from "react";
import s from "./Button.module.css";
import Link from "next/link";

type ButtonVariant = "outline" | "filled";

type BaseProps = {
	children: ReactNode;
	variant?: ButtonVariant;
	className?: string;
	href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
	children,
	variant = "outline",
	className,
	href,
	...props
}: BaseProps) {
	const classes = `${s.button} ${s[variant]} ${className}`.trim();

	if (href) {
		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		);
	}

	return (
		<button type="button" className={classes} {...props}>
			{children}
		</button>
	);
}
