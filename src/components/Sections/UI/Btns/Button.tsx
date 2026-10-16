import { ReactNode } from "react";
import s from "./Button.module.css";
import Link from "next/link";

type ButtonVariant = "outline" | "filled";

type BaseProps = {
	children: ReactNode;
	variant?: ButtonVariant;
	className?: string;
	href?: string;
	target?: string;
	rel?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
	children,
	variant = "outline",
	className,
	href,
	target,
	rel,
	...props
}: BaseProps) {
	const classes = `${s.button} ${s[variant]} ${className}`.trim();

	if (href) {
		return (
			<Link href={href} className={classes} target={target} rel={rel}>
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
