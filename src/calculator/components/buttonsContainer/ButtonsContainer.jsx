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

  const handleClickButton = (event) => {
    if (event.target.value === "." && answer.includes(".")) {
      return;
    }

    if (event.target.value === "." && answer === "") {
      setPrevValue("0.");
      setAnswer("0.");
      setCleanData("C");
      return;
    }

    if (event.target.value !== "0" || answer) {
      if (operator) {
        setNextValue(nextValue.concat(event.target.value));
        setAnswer(
          event.target.value === "." ||
            (answer.includes(".") && !answer.includes("e"))
            ? String(nextValue.concat(event.target.value))
            : String(Number(nextValue.concat(event.target.value)))
        );
      } else {
        setPrevValue(prevValue.concat(event.target.value));
        setAnswer(
          event.target.value === "." ||
            (answer.includes(".") && !answer.includes("e"))
            ? String(prevValue.concat(event.target.value))
            : String(Number(prevValue.concat(event.target.value)))
        );
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

  const operatorHandle = (event) => {
    if (prevValue && nextValue) {
      switch (operator ? operator : event.target.value) {
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
        default:
          break;
      }
    }

    setOperator(event.target.value);
    setNextValue("");

    if (answer && !operator) {
      setPrevValue(answer);
    }
  };

  const calculator = () => {
    if (prevValue && nextValue) {
      switch (operator) {
        case "+":
          const placeHolderSum = Number(prevValue) + Number(nextValue);
          setAnswer(String(placeHolderSum));
          console.log("WHAT?", placeHolderSum);
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

  const percentageValue = () => {
    setAnswer(String(Number(answer) / 100));
    setPrevValue(String(Number(answer) / 100));
  };

  const handleButtonsKeyPress = (event) => {
    if (event.key === "Enter") {
      setOperator("=");
      calculator();
    }
  };

  return (
    <section className="buttonsContainer" onKeyPress={handleButtonsKeyPress}>
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
          onClick={percentageValue}
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
          &divide;
        </button>
      </div>
      <div className="rowContainer">
        <button className="btnContent" value={"7"} onClick={handleClickButton}>
          7
        </button>
        <button className="btnContent" value={"8"} onClick={handleClickButton}>
          8
        </button>
        <button className="btnContent" value={"9"} onClick={handleClickButton}>
          9
        </button>
        <button
          className="btnContent"
          style={{
            backgroundColor: "#FFA00A",
            fontWeight: "400",
            border: operator === "X" ? "1.5px solid black" : "",
          }}
          value={"X"}
          onClick={operatorHandle}
        >
          &times;
        </button>
      </div>
      <div className="rowContainer">
        <button className="btnContent" value={"4"} onClick={handleClickButton}>
          4
        </button>
        <button className="btnContent" value={"5"} onClick={handleClickButton}>
          5
        </button>
        <button className="btnContent" value={"6"} onClick={handleClickButton}>
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
          &#8722;
        </button>
      </div>
      <div className="rowContainer">
        <button className="btnContent" value={"1"} onClick={handleClickButton}>
          1
        </button>
        <button className="btnContent" value={"2"} onClick={handleClickButton}>
          2
        </button>
        <button className="btnContent" value={"3"} onClick={handleClickButton}>
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
          onClick={handleClickButton}
        >
          0
        </button>
        <button className="btnContent" value={"."} onClick={handleClickButton}>
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
    </section>
  );
};

export default ButtonsContainer;
