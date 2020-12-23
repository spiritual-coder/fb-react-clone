import React from "react";
import NavBar from "./Components/NavBar.js";
import Main from "./Components/Main.js";

export default function AppContainer() {
  return (
    <div className="container">
      <NavBar />
      <Main />
    </div>
  );
}
