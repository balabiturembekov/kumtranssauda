import { FC } from "react";
import Link from "next/link";
import { NavLinks } from "../../types";
import Socials from "../socials/Socials";

type MobileMenuProps = {
  open: boolean;
  navlinks: NavLinks[];
  setOpen: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({ open, setOpen, navlinks }) => {
  return (
    <div className={open ? `mobile-menu active` : `mobile-menu`}>
      <ul className="menu">
        {navlinks.map(({ id, href, text }) => (
          <li onClick={setOpen} key={id} className="menu-item">
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>

      <Socials />
    </div>
  );
};

export default MobileMenu;
