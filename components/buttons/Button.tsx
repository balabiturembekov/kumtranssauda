import { FC } from "react";
import styles from "../../styles/Button.module.css";

type ButtonProps = {
  text: string;
  className?: string;
};

const Button: FC<ButtonProps> = ({ text, className }) => (
  <button className={`${styles.button} ${className}`}>{text}</button>
);

export default Button;
