/* eslint-disable react/prop-types */
import React, { Component } from "react";

export default class Bank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      disabled: false,
    };
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  toggleCheck() {
    if (this.props.power === true) {
      if (this.props.currentPadBankId === "Heater Kit") {
        this.setState({
          checked: true,
          disabled: false,
        });
      } else {
        this.setState({
          checked: false,
          disabled: false,
        });
      }
    } else {
      this.setState({
        checked: false,
        disabled: true,
      });
    }
  }

  render() {
    return (
      <>
        <div className="control center bank">
          <p className="description">Bank</p>
          <input
            disabled={this.state.disabled && !this.props.power}
            type="checkbox"
            id="bank"
            defaultChecked={this.state.checked}
            onClick={this.toggleCheck}
            onChange={this.props.selectBank}
          />
          <label htmlFor="bank"></label>
        </div>
      </>
    );
  }
}
