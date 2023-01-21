import { FC } from "react";
import Socials from "../socials/Socials";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap flex-wrap">
          <div className="footer-block">
            <h4>Узнайте больше о нашей компаний</h4>
            <p>присоединяйтесь к нам в соц сетях</p>
            <Socials />
          </div>
          <div className="mission">
            Наша цель <span>доверие</span> наших клиентов
          </div>
          <div className="copyright">
            &copy; КұмТрансСауда {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
