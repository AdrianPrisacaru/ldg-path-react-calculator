import ReactDOM from "react-dom";
import LayoutCalculator from "./calculator/LayoutCalculator";

const App = () => {
  return (
    <>
      <LayoutCalculator />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
