import React from "react";
function RightNavigation({ button }) {
  return (
    <>
      <div className="navigationButton">
        <img src={button} alt="navButton" />
      </div>
    </>
  );
}

export default RightNavigation;
