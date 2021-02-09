import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//! Components
import Navbar from "./Components/navbar";
// import Addinput from "./Components/addnewtask";
import TodoContainer from "./Components/todoContainer";
class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: "#424952",
          height: "170vh",
        }}
      >
        {/* Navbar */}
        <Navbar></Navbar>
        {/* Adding input */}
        {/* <Addinput></Addinput> */}
        {/* Call container */}
        <TodoContainer></TodoContainer>
      </div>
    );
  }
}

export default App;
