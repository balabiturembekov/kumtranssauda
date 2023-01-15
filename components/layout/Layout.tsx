import { FC, ReactNode } from "react";
import Header from "../header/Header";
import gilroy from "../../fonts";
import Footer from "../footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={gilroy.className}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
