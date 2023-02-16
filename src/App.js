import React from "react";
import Countdown from "./components/Countdown";

const App = () => {
  return (
    <div className="App">
      <div className="App-title">Timers Demo</div>
      <div className="Timers">
        <Countdown />
      </div>
    </div>
  );
};

export default App;
