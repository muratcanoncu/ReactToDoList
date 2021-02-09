import React, { Component } from "react";
import Todoitem from "./todoItem";
export default class done extends Component {
  //! first way to create state
  // state = {
  //   newTask: "",
  // };
  //! second way create a state
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
    //first way to call function "bind" method
    this.handleChange = this.handleChange.bind(this);
  }
  //! filling input
  // handleChange = (event) => {
  //   this.setState({
  //     newTask: event.target.value,
  //   });
  // };

  //! old way
  handleChange(event) {
    this.setState({
      newTask: event.target.value,
    });
  }
  // submitting data
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
      padding: "10px 30px",
      width: "200px",
      margin: "20px 0",
    };
    const { donetodos } = this.props;
    return (
      <div>
        <form
          style={{
            width: "600px",
          }}
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            id="newtask"
            style={inputStyle}
            value={this.state.newTask}
            onChange={this.handleChange}
          ></input>
          <input
            className="submitBtn"
            type="submit"
            value="Add"
            style={buttonStyle}
          ></input>
          <h1
            style={{
              color: "white",
              textAlign: "left",
              fontWeight: "bolder",
              marginLeft: "25px",
            }}
          >
            To Do - Not Done
          </h1>
          {donetodos.map((doneContent) => {
            if (!doneContent.done) {
              return (
                <Todoitem
                  // bridge for my function from grandparent to child
                  {...this.props}
                  // onStatusChange={this.props.clickFunction}
                  key={doneContent.id}
                  task={doneContent.task}
                  icon={<i class="fas fa-check"></i>}
                ></Todoitem>
              );
            } else {
              null;
            }
          })}
        </form>
      </div>
    );
  }
}
