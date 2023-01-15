import { FC } from "react";

const skilssList = [
  { id: "1", text: "Надо наполнить контентом" },
  { id: "2", text: "Надо наполнить контентом" },
  { id: "3", text: "Надо наполнить контентом" },
  { id: "4", text: "Надо наполнить контентом" },
  { id: "5", text: "Надо наполнить контентом" },
  { id: "6", text: "Надо наполнить контентом" },
];

const Skills: FC = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-wrap flex-wrap">
        <div className="skills-content">
          <div className="skills-block">
            <h2 className="section-heading">
              <span>Заголовок секции</span> продолжение
            </h2>
            <ul className="skills-list">
              {skilssList.map(({ id, text }) => (
                <li key={id}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="skills-content">
          <div className="skills-block">
            <h2 className="section-heading">
              <span>Заголовок секции</span>
              <br />
              Место для заголовка
            </h2>
            <div className="skills-price">5 000 тг.</div>
            <div className="section-desc">
              Доставка в любую точку города и области
              <span className="skills-tip">Место для когото текста</span>
            </div>
            <p>2 место для какогото текста, описание или информация</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
