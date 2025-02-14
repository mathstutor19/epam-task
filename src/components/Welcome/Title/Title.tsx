import "./Title.css";
import { TitleProps } from "./Title.type";

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="welcome__title">{text}</h1>;
};

export default Title;
