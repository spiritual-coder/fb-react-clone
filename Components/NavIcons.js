import React from "react";
function NavIcons({ icon }) {
  return (
    <>
      <div className="navigationIcon">
        <img alt="navIcon." src={icon} />
      </div>
    </>
  );
}

export default NavIcons;
