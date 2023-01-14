import { FC } from "react";

type ButtonProps = {
  text: string;
};

const Button: FC<ButtonProps> = ({ text }) => (
  <button className="button offer-button button-accent">{text}</button>
);

export default Button;
