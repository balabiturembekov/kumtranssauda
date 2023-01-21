import { FC } from "react";
import Button from "../buttons/Button";

const Offer: FC = () => {
  return (
    <section className="offer" id="offer">
      <div className="container">
        <div className="offer-block">
          <h1 className="offer-heading">
            Строительный <span>песок</span>
          </h1>
          <div className="offer-desc">
            <ul>
              <li>Песок строительный фракция 2,9</li>
              <li>Песок обогащённый (1,2: 1,5: 1,9: 2,5: 2,9) вперемешку </li>
              <li>Песок строительный фракция 1.9</li>
            </ul>
          </div>
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
    </section>
  );
};

export default Offer;
