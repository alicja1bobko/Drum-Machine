/* eslint-disable react/prop-types */

import React, { Component } from "react";
import "./drumPad.css";



export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown(e) {
    let activeBtn = document.getElementById(e.code);
    activeBtn.classList.add("active");
  }

  onKeyUp(e) {
    let activeBtn = document.getElementById(e.code);
    activeBtn.classList.remove("active");
  }

  handleKeyPress(e) {
    if (e.code === this.props.code) {
      this._reactInternals.child.stateNode.focus(); //onkeydown works on the first run (requires focus on element)
      this.playSound();
    }
  }

  playSound() {
    var audio = document.getElementById(this.props.letterTrigger);
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    const { sound, code, letterTrigger } = this.props;
    return (
      <div
        tabIndex={0}
        className="drum-pad"
        id={code}
        onClick={this.playSound}
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
      >
        <audio src={sound} id={letterTrigger} className="letter"></audio>
        {letterTrigger}
      </div>
    );
  }
}