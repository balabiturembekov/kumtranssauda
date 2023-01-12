import { FC } from "react";
import Button from "../buttons/Button";
import styles from "../../styles/Offer.module.css";

const Offer: FC = () => {
  return (
    <section className="section">
      <div className={`container ${styles.offerContainer}`}>
        <div className={styles.offerBlock}>
          <h1 className={styles.offerHeading}>
            Строительный <span>песок</span>
          </h1>
          <div className={styles.offerDesc}>
            <ul>
              <li>Песок строительный фракция 2,9</li>
              <li>Песок обогащённый (1,2: 1,5: 1,9: 2,5: 2,9) вперемешку </li>
              <li>Песок строительный фракция 1.9</li>
            </ul>
          </div>
        </div>

        <Button text="Оставить заявку" className={styles.offerBtn} />

        <ul className={styles.offerList}>
          <li className={styles.offerItem}>
            <span>Песок</span> Строительный
          </li>
          <li className={styles.offerItem}>
            <span>Доставка</span> Город и область
          </li>
          <li className={styles.offerItem}>
            <span>Надежность</span>5 месяцев
          </li>
          <li className={styles.offerItem}>
            <span>Цена</span> 5000 тг. по городу и обл.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Offer;
