import { useState } from "react";
import WrapperCalculator from "./components/wrapper/WrapperCalculator";
import ScreenContainer from "./components/screenContainer/ScreenContainer";
import ButtonsContainer from "./components/buttonsContainer/ButtonsContainer";

const Calculator = () => {
  const [answer, setAnswer] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [nextValue, setNextValue] = useState("");

  return (
    <WrapperCalculator>
      <ScreenContainer answer={answer} />
      <ButtonsContainer
        answer={answer}
        setAnswer={setAnswer}
        prevValue={prevValue}
        setPrevValue={setPrevValue}
        setNextValue={setNextValue}
        nextValue={nextValue}
      />
    </WrapperCalculator>
  );
};

export default Calculator;
