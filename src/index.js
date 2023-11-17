import React from "react";
import ReactDOM from "react-dom/client";

import Main from "./component/Main";
import TryGlass from "./component/TryGlass";
import Header from "./component/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Main />
    <TryGlass />
  </div>
);
