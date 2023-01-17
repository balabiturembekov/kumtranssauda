import { FC } from "react";
import Button from "../buttons/Button";
import { motion } from "framer-motion";

const Offer: FC = () => {
  return (
    <motion.section
      initial={{ y: 400, opacity: 0 }}
      animate={{ y: [100, 0], opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3, delay: 0.1 }}
      className="offer"
      id="offer"
    >
      <div className="container">
        <div className="offer-block">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="offer-heading"
          >
            Строительный <span>песок</span>
          </motion.h1>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="offer-desc"
          >
            <ul>
              <li>Песок строительный фракция 2,9</li>
              <li>Песок обогащённый (1,2: 1,5: 1,9: 2,5: 2,9) вперемешку </li>
              <li>Песок строительный фракция 1.9</li>
            </ul>
          </motion.div>
        </div>

        <Button text="Оставить заявку" />

        <ul className="offer-list flex-wrap">
          <li className="offer-item">
            <span>Песок</span> Строительный
          </li>
          <li className="offer-item">
            <span>Доставка</span> Город и область
          </li>
          <li className="offer-item">
            <span>Надежность</span>5 месяцев
          </li>
          <li className="offer-item">
            <span>Цена</span> 5000 тг. по городу и обл.
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Offer;
