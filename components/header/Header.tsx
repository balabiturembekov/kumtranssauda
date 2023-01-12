import { FC, useState } from "react";
import gilroy from "../../fonts";
import styles from "../../styles/Header.module.css";
import Logo from "../logo/Logo";
import MenuIcon from "../menu-icon/MenuIcon";
import MobileMenu from "../mobile-menu/MobileMenu";

const navLink = [
  { id: "1", href: "/", text: "Главная" },
  { id: "2", href: "/about", text: "О компаний" },
  { id: "3", href: "/services", text: "Сервис" },
  { id: "4", href: "/contact", text: "Контакты" },
];

const Header: FC = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <header className={`${styles.header} ${gilroy.className}`}>
      <nav className={styles.navBar}>
        <div className={`container ${styles.navContainer}`}>
          <Logo />
          <ul className={styles.menu}>
            {navLink.map(({ id, href, text }) => (
              <li className={styles.menuItem} key={id}>
                <a href={href}>{text}</a>
              </li>
            ))}
          </ul>
          <MenuIcon open={open} onClick={handleMenuClick} />
        </div>
      </nav>
      <MobileMenu open={open} navlinks={navLink} />
    </header>
  );
};

export default Header;
