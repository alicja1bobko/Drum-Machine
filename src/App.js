import React from "react";
import DrumPadContainer from "./components/DrumPadContainer";
import Power from "./components/PowerSlider/Power";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
    };
    this.powerControl = this.powerControl.bind(this);
  }

  powerControl() {
    this.setState({
      power: !this.state.power,
    });
  }

  render() {
    return (
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div id="drum-machine">
          <DrumPadContainer power={this.state.power} />
          <div className="controls-panel">
            <Power power={this.state.power} powerControl={this.powerControl} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
