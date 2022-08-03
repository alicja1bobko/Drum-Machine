import React from "react";
import DrumPadContainer from "./components/DrumPadContainer";
import Power from "./components/Slider/Power";
import Bank from "./components/Slider/Bank";
import { bankOne } from "./utils/bankOne";
import { bankTwo } from "./utils/bankTwo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: "",
      currentPadBank: bankOne,
      currentPadBankId: "Heater Kit",
    };
    this.powerControl = this.powerControl.bind(this);
    this.handleDisplayer = this.handleDisplayer.bind(this);
    this.selectBank = this.selectBank.bind(this);
  }

  powerControl() {
    this.setState({
      power: !this.state.power,
      display: "",
    });
  }

  handleDisplayer(name) {
    this.setState({ display: name });
  }

  selectBank() {
    if (this.state.power) {
      this.state.currentPadBankId === "Heater Kit"
        ? this.setState({
            currentPadBank: bankTwo,
            currentPadBankId: "Smooth Piano Kit",
            display: "Smooth Piano Kit",
          })
        : this.setState({
            currentPadBank: bankOne,
            currentPadBankId: "Heater Kit",
            display: "Heater Kit",
          });
    }
  }

  render() {
    return (
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div id="drum-machine">
          <DrumPadContainer
            currentPadBank={this.state.currentPadBank}
            power={this.state.power}
            handleDisplayer={this.handleDisplayer}
          />
          <div className="controls-panel">
            <Power power={this.state.power} powerControl={this.powerControl} />
            <span id="display" className="center">
              {this.state.power ? this.state.display : ""} &nbsp;
            </span>
            <Bank
              selectBank={this.selectBank}
              currentPadBankId
              power={this.state.power}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
