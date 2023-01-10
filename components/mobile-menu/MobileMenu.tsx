import { FC } from "react";
import Link from "next/link";

type NavLinks = {
  id: string;
  href: string;
  text: string;
};

type MobileMenuProps = {
  open: boolean;
  navlinks: NavLinks[];
};

const MobileMenu: FC<MobileMenuProps> = ({ open, navlinks }) => {
  return (
    <div className={open ? `mobileMenu active` : `mobileMenu`}>
      <ul>
        {navlinks.map(({ id, href, text }) => (
          <li key={id} className="mobileItem">
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
