/* eslint-disable react/prop-types */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Power extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="control center power">
          <p className="description">Power</p>
          <input
            type="checkbox"
            id="switch"
            defaultChecked={this.props.power}
            onChange={this.props.powerControl}
          />
          <label htmlFor="switch"></label>
        </div>
      </>
    );
  }
}

Power.propTypes = {
  power: PropTypes.bool.isRequired,
};
