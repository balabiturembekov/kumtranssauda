import { FC, useState, UIEvent, useEffect } from "react";
import DesctopMenu from "../desctop-menu/DesctopMenu";
import Logo from "../logo/Logo";
import MenuIcon from "../menu-icon/MenuIcon";
import MobileMenu from "../mobile-menu/MobileMenu";
import Socials from "../socials/Socials";

const navLink = [
  { id: "1", href: "/", text: "Главная" },
  { id: "2", href: "#audience", text: "О компаний" },
  { id: "3", href: "#skills", text: "Сервис" },
  { id: "4", href: "/contact", text: "Контакты" },
];

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 20)
      );
    }
  }, []);

  return (
    <header className={`header ${scroll ? "sticky" : ""}`}>
      <nav className="nav-bar">
        <div className="container">
          <Logo />
          <DesctopMenu navlinks={navLink} />
          <Socials />
          <MenuIcon open={open} onClick={handleMenuClick} />
        </div>
      </nav>
      <MobileMenu open={open} setOpen={handleMenuClick} navlinks={navLink} />
    </header>
  );
};

export default Header;
