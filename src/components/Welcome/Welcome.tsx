import "./Welcome.css";
import Title from "./Title/Title";
import Content from "./Content/Content";
const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__container">
        <Title />
        <Content />
      </div>
    </section>
  );
};

export default Welcome;
