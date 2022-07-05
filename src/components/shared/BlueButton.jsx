import React from "react";

function BlueButton({ text }) {
  return (
    <div>
      <button type="submit" className="BlueButton">
        {" "}
        {text}
      </button>
    </div>
  );
}

BlueButton.defaultProps = {
  text: "Submit",
};

export default BlueButton;
