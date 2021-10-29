import "./ButtonsContainer.css";

const ButtonsContainer = () => {
  return (
    <div className="buttonsContainer">
      <div className="rowContainer">
        <div className="btnContainer" style={{ backgroundColor: "#656366" }}>
          C
        </div>
        <div className="btnContainer" style={{ backgroundColor: "#656366" }}>
          +/-
        </div>
        <div className="btnContainer" style={{ backgroundColor: "#656366" }}>
          %
        </div>
        <div className="btnContainer" style={{ backgroundColor: "#FFA00A" }}>
          /
        </div>
      </div>
      <div className="rowContainer">
        <div className="btnContainer">7</div>
        <div className="btnContainer">8</div>
        <div className="btnContainer">9</div>
        <div className="btnContainer" style={{ backgroundColor: "#FFA00A" }}>
          X
        </div>
      </div>
      <div className="rowContainer">
        <div className="btnContainer">4</div>
        <div className="btnContainer">5</div>
        <div className="btnContainer">6</div>
        <div className="btnContainer" style={{ backgroundColor: "#FFA00A" }}>
          -
        </div>
      </div>
      <div className="rowContainer">
        <div className="btnContainer">1</div>
        <div className="btnContainer">2</div>
        <div className="btnContainer">3</div>
        <div className="btnContainer" style={{ backgroundColor: "#FFA00A" }}>
          +
        </div>
      </div>
      <div className="rowContainer" style={{ borderRadius: "0 0 9px 9px" }}>
        <div
          className="btnContainer"
          style={{ width: "50%", borderRadius: "0 0 0 9px" }}
        >
          0
        </div>
        <div className="btnContainer">,</div>
        <div
          className="btnContainer"
          style={{ borderRadius: "0 0 9px 0", backgroundColor: "#FFA00A" }}
        >
          =
        </div>
      </div>
    </div>
  );
};

export default ButtonsContainer;
