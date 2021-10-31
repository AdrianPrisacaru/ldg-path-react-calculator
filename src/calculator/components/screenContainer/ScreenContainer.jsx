import "./ScreenContainer.css";

const ScreenContainer = ({ answer }) => {
  const SCREEN_TEXT_SIZE = 3;

  return (
    <section
      className="screenMainContainer"
      style={{
        fontSize: SCREEN_TEXT_SIZE - answer.length * 0.045 + "em",
      }}
    >
      <p className="rest">{answer ? answer.replace(".", ",") : "0"}</p>
    </section>
  );
};

export default ScreenContainer;
