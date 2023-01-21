import { FC, useState } from "react";

type QuestionBlockProps = {
  title: string;
  text: string;
};

const QuestionBlock: FC<QuestionBlockProps> = ({ title, text }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div onClick={handleClick} className="program-block">
      <div className={show ? "program-title active" : "program-title"}>
        <h3>{title}</h3>
      </div>
      <div className={show ? "program-content active" : "program-content"}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default QuestionBlock;
