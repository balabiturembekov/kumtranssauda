import { FC, ReactNode } from "react";
import Header from "../header/Header";
import SnowFall from "react-snowfall";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="Layout">
    <SnowFall />
    <Header />
    {children}
  </div>
);

export default Layout;
