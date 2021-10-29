import OptionBarContainer from "../optionBarContainer/optionBarContainer";
import "./WrapperCalculator.css";

const WrapperCalculator = (props) => {
  return (
    <div className="wrapperContainer">
      <OptionBarContainer />
      {props.children}
    </div>
  );
};

export default WrapperCalculator;
