/* eslint-disable react/prop-types */
import React, { Component } from "react";
import DrumPad from "./DrumPad/DrumPad";
import PropTypes from "prop-types";

export default class DrumPadContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleDisplayer, currentPadBank, volume } = this.props;
    let drumPads = currentPadBank.map((drumObj, i, padsArray) => {
      return (
        <DrumPad
          power={this.props.power}
          letterTrigger={padsArray[i].letterTrigger}
          key={padsArray[i].letterTrigger}
          padname={padsArray[i].id}
          sound={padsArray[i].url}
          code={padsArray[i].code}
          passPadName={(name) => handleDisplayer(name)}
          volume={volume}
        />
      );
    });
    return <div className="drum-pad-container">{drumPads}</div>;
  }
}

DrumPadContainer.propTypes = {
  power: PropTypes.bool.isRequired,
};
