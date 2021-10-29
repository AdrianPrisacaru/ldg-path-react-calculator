import { Textfit } from "react-textfit";
import "./ScreenContainer.css";

const ScreenContainer = () => {
  const result = "254";
  return (
    <div className="screenMainContainer">
      <Textfit
        mode="single"
        max={45}
        className="screenTest"
        style={{ color: "#FFFFFF" }}
      >
        {result}
      </Textfit>
    </div>
  );
};

export default ScreenContainer;
