import React from "react";
import LeftBar from "./LeftBar";
import Center from "./Center";
import RightBar from "./RightBar";

export default function Main() {
  return (
    <>
      <div className="mainContent">
        <LeftBar />
        <Center />
        <RightBar />
      </div>
    </>
  );
}
