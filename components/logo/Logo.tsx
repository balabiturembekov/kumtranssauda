import Image from "next/image";
import styles from "../../styles/Header.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        src="./devhouse.svg"
        alt="dev house logo"
        width="70"
        height="67"
        priority
      />
    </div>
  );
};

export default Logo;
