import "./ScreenContainer.css";

const ScreenContainer = ({ answer }) => {
  const SCREEN_HIGH_SIZE = 3;
  const SCREEN_MIDDLE_SIZE = 1.6;
  const SCREEN_SMALL_SIZE = 1;

  const calculateTextSize = () => {
    switch (true) {
      case answer.length < 20:
        return SCREEN_HIGH_SIZE - answer.length * 0.095 + "em";
      case answer.length >= 20 && answer.length < 38:
        return SCREEN_MIDDLE_SIZE - answer.length * 0.027 + "em";
      case answer.length >= 38 && answer.length < 53:
        return SCREEN_SMALL_SIZE - answer.length * 0.01 + "em";
      case answer.length >= 53 && answer.length < 70:
        return "0.35em";
      case answer.length >= 70 && answer.length < 100:
        return "0.25em";
      case answer.length >= 100 && answer.length < 125:
        return "0.15em";
      case answer.length >= 125:
        return "0.10em";
    }
  };
  console.log(answer);
  return (
    <section
      className="screenMainContainer"
      style={{
        fontSize: calculateTextSize(),
      }}
    >
      <p className="rest">{answer ? answer.replace(".", ",") : "0"}</p>
    </section>
  );
};

export default ScreenContainer;
