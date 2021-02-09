import React, { Component } from "react";

export default class todoItem extends Component {
  render() {
    const { task, icon } = this.props;
    let buttonStyle = {
      color: "white",
      fontWeight: "bolder",
      borderRadius: "35px",
      fontFamily: "monospace",
      fontSize: "1.2rem",
      border: "none",
      background: "#66707a",
      padding: "5px 35px",
      height: "40px",
    };
    return (
      <div
        className="d-flex justify-content-between m-3"
        style={{
          backgroundColor: "#678f80",
          width: "450px",
          height: "50px",
          borderRadius: "35px",
          padding: "5px 11px",
        }}
      >
        <p style={{ color: "white", lineHeight: "40px", fontWeight: "bolder" }}>
          {task}
        </p>
        {/* Calling function from grandparent with "this.props" keyword */}
        <button style={buttonStyle} onClick={this.props.clickFunction}>
          {icon}
        </button>
      </div>
    );
  }
}
