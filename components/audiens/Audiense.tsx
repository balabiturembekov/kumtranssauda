import { FC } from "react";

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
    <section className="section">
      <div className="container">
        <h2 className="sectionHeading">
          <span>Виды предлогаемых песков </span> для вас
        </h2>
        <div className="audienseContent">
          <ul className="audienseList">
            {audienseList.map(({ id, title, text }) => (
              <li className="audienseItem" key={id}>
                <span>0{id}</span>
                <div>
                  <h3>{title}</h3> <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="audienseInfo">
            Мы следим за качеством для того,
            <br /> чтобы и дальше какое-то описание или важная информация по
            обновлениям или еще что-то
            <b>Обновлено: {new Date().getFullYear()} г.</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audiense;
