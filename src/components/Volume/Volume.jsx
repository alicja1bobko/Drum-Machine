/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "./volume.css";

export default class Volume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="control center volume">
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.01"
          value={this.props.volume}
          onChange={this.props.calculateVolume}
        />
      </div>
    );
  }
}
