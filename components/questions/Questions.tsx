import { FC } from "react";
import QuestionBlock from "./QuestionBlock";

const questions = [
  { id: 1, title: "Сколько будет стоить доставка?", text: "Какой-то текст" },
  { id: 2, title: "Какой песок лучше использовать?", text: "Какой-то текст" },
];

const Question: FC = () => {
  return (
    <section id="questions" className="questions">
      <div className="container">
        <h2 className="section-heading">
          <span>Ответы</span> на ваши вопросы
        </h2>
        <div className="program-list flex-wrap">
          <div className="program-wrap">
            {questions.map(({ id, title, text }) => (
              <QuestionBlock key={id} title={title} text={text} />
            ))}
          </div>
          <div className="program-wrap"></div>
        </div>
      </div>
    </section>
  );
};

export default Question;
