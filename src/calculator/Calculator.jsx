import WrapperCalculator from "./components/wrapper/WrapperCalculator";
import ScreenContainer from "./components/screenContainer/ScreenContainer";
import ButtonsContainer from "./components/buttonsContainer/ButtonsContainer";

const Calculator = () => {
  return (
    <WrapperCalculator>
      <ScreenContainer />
      <ButtonsContainer />
    </WrapperCalculator>
  );
};

export default Calculator;
