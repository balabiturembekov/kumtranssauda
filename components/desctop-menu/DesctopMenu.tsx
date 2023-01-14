import React, { FC } from "react";
import Link from "next/link";
import { NavLinks } from "../../types";

type DesctopMenuProps = {
  navlinks: NavLinks[];
};

const DesctopMenu: FC<DesctopMenuProps> = ({ navlinks }) => {
  return (
    <ul className="menu">
      {navlinks.map(({ id, href, text }) => (
        <li key={id} className="menu-item">
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesctopMenu;
