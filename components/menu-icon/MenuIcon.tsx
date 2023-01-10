import { FC } from "react";
import styles from "../../styles/Header.module.css";

type MenuIconProps = {
  open: boolean;
  onClick: () => void;
};

const MenuIcon: FC<MenuIconProps> = ({ open, onClick }) => {
  return (
    <div onClick={onClick} className={styles.menuIcon}>
      <span className={open ? `hamburger open` : `hamburger`}></span>
    </div>
  );
};

export default MenuIcon;
