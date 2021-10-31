import { useState } from "react";
import "./ButtonsContainer.css";

const ButtonsContainer = ({
  answer,
  setAnswer,
  nextValue,
  setNextValue,
  prevValue,
  setPrevValue,
}) => {
  const [cleanData, setCleanData] = useState("AC");
  const [operator, setOperator] = useState("");

  const handleclick = (e) => {
    if (e.target.value !== "0" || answer) {
      if (operator) {
        setNextValue(nextValue.concat(e.target.value));
        setAnswer(nextValue.concat(e.target.value));
      } else {
        setPrevValue(prevValue.concat(e.target.value));
        setAnswer(prevValue.concat(e.target.value));
        setCleanData("C");
      }
    }
  };

  const clear = () => {
    if (operator) {
      setOperator("");
      setPrevValue(answer);
      setCleanData("AC");
    } else {
      setAnswer("");
      setPrevValue("");
      setNextValue("");
      setOperator("");
      setCleanData("AC");
    }
  };

  const operatorHandle = (e) => {
    setOperator(e.target.value);

    if (prevValue && nextValue) {
      switch (e.target.value) {
        case "+":
          const placeHolderSum = Number(prevValue) + Number(nextValue);
          setAnswer(String(placeHolderSum));
          setPrevValue(String(placeHolderSum));
          break;
        case "-":
          const placeHolderDif = Number(prevValue) - Number(nextValue);
          setAnswer(String(placeHolderDif));
          setPrevValue(String(placeHolderDif));
          break;
        case "/":
          const placeHolderDiv = Number(prevValue) / Number(nextValue);
          setAnswer(String(placeHolderDiv));
          setPrevValue(String(placeHolderDiv));
          break;
        case "X":
          const placeHolderMult = Number(prevValue) * Number(nextValue);
          setAnswer(String(placeHolderMult));
          setPrevValue(String(placeHolderMult));
          break;
        case "%":
          const placeHolderPercent = Number(answer) / 100;
          setAnswer(String(placeHolderPercent));
          setPrevValue(String(placeHolderPercent));
          break;
        default:
          break;
      }
    }
    setNextValue("");
    if (answer) {
      setPrevValue(answer);
    }
  };

  const calculator = () => {
    if (prevValue && nextValue) {
      switch (operator) {
        case "+":
          const placeHolderSum = Number(prevValue) + Number(nextValue);
          setAnswer(String(placeHolderSum));
          break;
        case "-":
          const placeHolderDif = Number(prevValue) - Number(nextValue);
          setAnswer(String(placeHolderDif));
          break;
        case "/":
          const placeHolderDiv = Number(prevValue) / Number(nextValue);
          setAnswer(String(placeHolderDiv));
          break;
        case "X":
          const placeHolderMult = Number(prevValue) * Number(nextValue);
          setAnswer(String(placeHolderMult));
          break;
        case "%":
          const placeHolderPercent = Number(answer) / 100;
          setAnswer(String(placeHolderPercent));
          break;
        default:
          break;
      }
      setPrevValue("");
      setNextValue("");
      setOperator("");
    }
  };

  const negateValue = () => {
    setPrevValue(prevValue > 0 ? "-" + prevValue : prevValue.replace("-", ""));
    setAnswer(answer > 0 ? "-" + answer : answer.replace("-", ""));
  };

  return (
    <div className="buttonsContainer">
      <div className="rowContainer">
        <button
          className="btnContent"
          style={{ backgroundColor: "#656366" }}
          value={cleanData}
          onClick={clear}
        >
          {cleanData}
        </button>
        <button
          className="btnContent"
          style={{ backgroundColor: "#656366" }}
          onClick={negateValue}
        >
          +/-
        </button>
        <button
          className="btnContent"
          style={{ backgroundColor: "#656366" }}
          value={"%"}
          onClick={operatorHandle}
        >
          %
        </button>
        <button
          className="btnContent"
          style={{
            backgroundColor: "#FFA00A",
            border: operator === "/" ? "1.5px solid black" : "",
          }}
          value={"/"}
          onClick={operatorHandle}
        >
          /
        </button>
      </div>
      <div className="rowContainer">
        <button className="btnContent" value={"7"} onClick={handleclick}>
          7
        </button>
        <button className="btnContent" value={"8"} onClick={handleclick}>
          8
        </button>
        <button className="btnContent" value={"9"} onClick={handleclick}>
          9
        </button>
        <button
          className="btnContent"
          style={{
            backgroundColor: "#FFA00A",
            border: operator === "X" ? "1.5px solid black" : "",
          }}
          value={"X"}
          onClick={operatorHandle}
        >
          X
        </button>
      </div>
      <div className="rowContainer">
        <button className="btnContent" value={"4"} onClick={handleclick}>
          4
        </button>
        <button className="btnContent" value={"5"} onClick={handleclick}>
          5
        </button>
        <button className="btnContent" value={"6"} onClick={handleclick}>
          6
        </button>
        <button
          className="btnContent"
          style={{
            backgroundColor: "#FFA00A",
            border: operator === "-" ? "1.5px solid black" : "",
          }}
          value={"-"}
          onClick={operatorHandle}
        >
          -
        </button>
      </div>
      <div className="rowContainer">
        <button className="btnContent" value={"1"} onClick={handleclick}>
          1
        </button>
        <button className="btnContent" value={"2"} onClick={handleclick}>
          2
        </button>
        <button className="btnContent" value={"3"} onClick={handleclick}>
          3
        </button>
        <button
          className="btnContent"
          style={{
            backgroundColor: "#FFA00A",
            border: operator === "+" ? "1.5px solid black" : "",
          }}
          value={"+"}
          onClick={operatorHandle}
        >
          +
        </button>
      </div>
      <div className="rowContainer" style={{ borderRadius: "0 0 9px 9px" }}>
        <button
          className="btnContent"
          style={{ width: "50%", borderRadius: "0 0 0 9px" }}
          value={"0"}
          onClick={handleclick}
        >
          0
        </button>
        <button className="btnContent" value={"."} onClick={handleclick}>
          ,
        </button>
        <button
          className="btnContent"
          style={{ borderRadius: "0 0 9px 0", backgroundColor: "#FFA00A" }}
          onClick={calculator}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default ButtonsContainer;
