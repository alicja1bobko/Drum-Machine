import React, { Component } from "react";
import DrumPad from "./DrumPad/DrumPad";
import { bankOne } from "../utils/bankOne";

export default class DrumPadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      padStateStyle: "",
    };
  }
  render() {
    let drumPads = bankOne.map((drumObj, i, padsArray) => {
      return (
        <DrumPad
          letterTrigger={padsArray[i].letterTrigger}
          key={padsArray[i].letterTrigger}
          padId={padsArray[i].id}
          sound={padsArray[i].url}
        />
      );
    });
    return <div className="drum-pad-container">{drumPads}</div>;
  }
}