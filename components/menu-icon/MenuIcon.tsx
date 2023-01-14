import { FC } from "react";

type MenuIconProps = {
  open: boolean;
  onClick: () => void;
};

const MenuIcon: FC<MenuIconProps> = ({ open, onClick }) => {
  return (
    <div onClick={onClick} className="menu-icon">
      <span className={open ? `hamburger open` : `hamburger`}></span>
    </div>
  );
};

export default MenuIcon;
