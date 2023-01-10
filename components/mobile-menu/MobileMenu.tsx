import { FC } from "react";

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
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
