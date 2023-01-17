import { FC } from "react";
import { motion } from "framer-motion";
import { container, item } from "../../animations";

const audienseList = [
  {
    id: 1,
    title: "Песок строительный",
    text: "Место для небольшого описания",
  },
  {
    id: 2,
    title: "Песок строительный",
    text: "Место для небольшого описания",
  },
  { id: 3, title: "Песок строительный", text: "Место для небольшого описания" },

  { id: 4, title: "Песок строительный", text: "Место для небольшого описания" },
];

const Audiense: FC = () => {
  return (
    <section className="audience" id="audience">
      <div className="container">
        <motion.h2
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span>Виды предлогаемых песков </span> для вас
        </motion.h2>
        <div>
          <motion.ul
            variants={container}
            initial="hidden"
            exit="exit"
            whileInView="show"
            viewport={{ once: false }}
            className="audiense-list flex-wrap"
          >
            {audienseList.map(({ id, title, text }) => (
              <motion.li variants={item} className="audience-item" key={id}>
                <span>0{id}</span>
                <div>
                  <h3>{title}</h3> <p>{text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            variants={{
              hidden: { x: 100, opacity: 0 },
              show: {
                x: 0,
                opacity: 1,
                transition: { ease: "easeInOut", duration: 0.3, delay: 1 },
              },
            }}
            initial="hidden"
            exit="exit"
            whileInView="show"
            className="infoblock infoblock_update"
          >
            Мы следим за качеством для того,
            <br /> чтобы и дальше какое-то описание или важная информация по
            обновлениям или еще что-то
            <b>Обновлено: {new Date().getFullYear()} г.</b>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Audiense;
