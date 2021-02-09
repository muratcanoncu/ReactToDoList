import React, { Component } from "react";

export default class addnewtask extends Component {
  state = {
    newTask: "",
  };
  handleChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // call attribute and pass input state as parameter
    this.props.handleAddTodo(this.state.newTask);
  };
  render() {
    let inputStyle = {
      color: "white",
      fontWeight: "bolder",
      borderRadius: "35px",
      fontFamily: "monospace",
      fontSize: "1.8rem",
      border: "none",
      width: "75%",
      background: "#678f80",
      padding: "2px 15px",
    };
    let buttonStyle = {
      color: "white",
      fontWeight: "bolder",
      borderRadius: "35px",
      fontFamily: "monospace",
      fontSize: "1.4rem",
      border: "none",
      background: "#66707a",
      padding: "10px 50px",
    };
    return (
      <div>
        <form
          className="d-flex justify-content-between m-4"
          style={{
            width: "700px",
          }}
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            id="newtask"
            value={this.state.newTask}
            style={inputStyle}
            onChange={this.handleChange}
          ></input>
          <input
            className="submitBtn"
            type="submit"
            value="Add"
            style={buttonStyle}
          ></input>
        </form>
      </div>
    );
  }
}
