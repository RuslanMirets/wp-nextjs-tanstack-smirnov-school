import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";
import { IconType } from "react-icons";

type Props = {
	type?: "submit" | "button" | "reset";
	onClick?: () => void;
	disabled?: boolean;
	variant?: "fill" | "outline";
	className?: string;
	icon?: IconType;
};

const Button = ({
	children,
	type = "button",
	onClick,
	disabled,
	variant = "fill",
	className,
	icon: Icon,
}: PropsWithChildren<Props>) => {
	return (
		<button
			className={clsx(
				className,
				styles.root,
				disabled && styles.disabled,
				variant == "fill" && styles.fill,
				variant == "outline" && styles.outline,
			)}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{Icon && <Icon size={22} />}
			{children}
		</button>
	);
};

export default Button;
