import "./OptionBarContainer.css";

const optionBarContainer = () => {
  return (
    <div className="circleBtnContainer">
      <div
        className="circleBtn"
        style={{ backgroundColor: "#FF5F57", fontSize: "12px" }}
      >
        X
      </div>
      <div
        className="circleBtn"
        style={{ backgroundColor: "#FEBD2E", fontSize: "12px" }}
      >
        -
      </div>
      <div
        className="circleBtn"
        style={{ backgroundColor: "#24C93F", fontSize: "12px" }}
      >
        +
      </div>
    </div>
  );
};

export default optionBarContainer;
