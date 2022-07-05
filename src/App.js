import React from "react";
import DrumPadContainer from "./components/DrumPadContainer";

function App() {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div id="drum-machine">
        <DrumPadContainer />
      </div>
    </div>
  );
}

export default App;
