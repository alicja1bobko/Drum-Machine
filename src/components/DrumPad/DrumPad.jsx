/* eslint-disable react/prop-types */

import React, { Component } from "react";
import "./drumPad.css";

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.playSound = this.playSound.bind(this);
  }

  playSound(e) {
    e.preventDefault();
    var audio = document.getElementById(this.props.letterTrigger);
    audio.play();
  }

  render() {
    const { letterTrigger, padId, sound } = this.props;
    return (
      <div className="drum-pad" id={padId} onClick={this.playSound}>
        <audio src={sound} id={letterTrigger}></audio>
        {this.props.letterTrigger}
      </div>
    );
  }
}
