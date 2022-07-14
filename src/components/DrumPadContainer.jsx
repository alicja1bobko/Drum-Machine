/* eslint-disable react/prop-types */
import React, { Component } from "react";
import DrumPad from "./DrumPad/DrumPad";
import { bankOne } from "../utils/bankOne";

export default class DrumPadContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let drumPads = bankOne.map((drumObj, i, padsArray) => {
      return (
        <DrumPad
          power={this.props.power}
          letterTrigger={padsArray[i].letterTrigger}
          key={padsArray[i].letterTrigger}
          padId={padsArray[i].code}
          sound={padsArray[i].url}
          code={padsArray[i].code}
        />
      );
    });
    return <div className="drum-pad-container">{drumPads}</div>;
  }
}
