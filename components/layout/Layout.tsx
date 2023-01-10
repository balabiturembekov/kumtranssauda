import { FC, ReactNode } from "react";
import Header from "../header/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="Layout">
    <Header />
    {children}
  </div>
);

export default Layout;
