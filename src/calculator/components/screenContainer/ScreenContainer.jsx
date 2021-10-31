import { Textfit } from "react-textfit";
import "./ScreenContainer.css";

const ScreenContainer = ({ answer }) => {
  return (
    <div className="screenMainContainer">
      <Textfit
        mode="single"
        max={45}
        className="screenTest"
        style={{ color: "#FFFFFF" }}
      >
        {answer ? answer : 0}
      </Textfit>
    </div>
  );
};

export default ScreenContainer;
