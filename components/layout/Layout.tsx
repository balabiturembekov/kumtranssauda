import { FC, ReactNode } from "react";
import Header from "../header/Header";
import gilroy from "../../fonts";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={gilroy.className}>
    <Header />
    {children}
  </div>
);

export default Layout;
