import React from "react";
function SidenavItems({ itemName, itemLink }) {
  return (
    <>
      <div className="itemSet">
        <div className="itemImg">
          <img alt="navItemimg." src={itemLink} />
        </div>
        <div className="itemNm">
          <h3>{itemName}</h3>
        </div>
      </div>
    </>
  );
}

export default SidenavItems;
