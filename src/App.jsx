import { useState } from "react";
import MainContainer from "./Main-container";

import "./App.css";

function App() {
  return (
    <div className="bg-slate-100 w-full flex h-[90vh] max-md:!h-full justify-center items-center">
      <MainContainer />
    </div>
  );
}

export default App;
