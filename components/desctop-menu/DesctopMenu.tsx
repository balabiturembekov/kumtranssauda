import Link from "next/link";
import React, { FC } from "react";
import { NavLinks } from "../../types";

type DesctopMenuProps = {
  navlinks: NavLinks[];
};

const DesctopMenu: FC<DesctopMenuProps> = ({ navlinks }) => {
  return (
    <ul className="descMenu">
      {navlinks.map(({ id, href, text }) => (
        <li key={id} className="mobileItem">
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesctopMenu;
