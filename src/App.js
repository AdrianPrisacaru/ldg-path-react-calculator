import ReactDOM from "react-dom";
import Calculator from "./calculator/Calculator";

const App = () => {
  return (
    <>
      <Calculator />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
