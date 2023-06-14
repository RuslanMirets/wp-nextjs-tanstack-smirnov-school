import { useFormContext } from "react-hook-form";
import styles from "./Input.module.scss";

type Props = {
	type: string;
	name: string;
	placeholder?: string;
};

const Input = ({ name, type, placeholder }: Props) => {
	const { register } = useFormContext();

	return (
		<input
			className={styles.root}
			type={type}
			placeholder={placeholder}
			{...register(name)}
		/>
	);
};

export default Input;
