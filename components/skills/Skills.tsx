import { FC } from 'react'

const skilssList = [
    { id: "1", text: "Создавать логику сайта, приложений" },
    { id: "2", text: "Разрабатывать архитектуру и алгоритмику" },
    { id: "3", text: "Проектировать интерфейсы и анимации" },
    { id: "4", text: "Писать чистый и эффективный код HTML, CSS и JavaScript" },
    { id: "4", text: "Тестировать код, делать рефакторинг и оптимизацию" },
    { id: "4", text: "Эффективно определять наилучшие решения для задач" },
  ];

const Skills: FC = () => {
  return (
    <section className="skills" id="skills">
        <div className="skills-wrap flex-wrap">
            <div className="skills-content">
                <div className="skills-block">
                    <h2 className="section-heading">
                        <span>Заголовок секции</span>
                            {" "}продолжение
                    </h2> 
                    <ul className="skills-list">
                        {skilssList.map(({id, text}) => (
                            <li key={id}>{text}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="skills-content">
                <div className="skills-block">
                    <h2 className="section-heading">
                        <span>Сколько зарабатывает</span>
                            <br />
                            frontend-разработчик
                    </h2>
                    <div className="skills-price">90 000 $</div>
                    <div className="section-desc">
                        В месяц на позиции Junior Frontend Developer.
                        <span className="skills-tip">
                            Значение из исследования «Хабр Карьера»
                        </span>
                    </div>
                    <p>
                        Уже сейчас на сате hh.ru размещено более 3000 вакансий разработчиков!
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills