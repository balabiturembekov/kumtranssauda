import { FC } from "react";
import Image from "next/image";
import logo from "../../public/pyramid.svg";

const Logo: FC = () => {
  return (
    <div className="logo">
      <Image src={logo} alt="dev house logo" width="20" height="20" />
    </div>
  );
};

export default Logo;
