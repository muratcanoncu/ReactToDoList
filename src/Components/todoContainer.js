import React, { Component } from "react";
import Donemap from "./done";
import Notdonemap from "./notDone";

class todoContainer extends Component {
  // state = {
  //   done: [
  //     {
  //       id: 1,
  //       done: false,
  //       task: "Make a website",
  //     },
  //     {
  //       id: 2,
  //       done: false,
  //       task: "Walk with your dog",
  //     },
  //     {
  //       id: 3,
  //       done: true,
  //       task: "Cook dinner",
  //     },
  //     {
  //       id: 4,
  //       done: true,
  //       task: "Go to supermarket",
  //     },

  //     {
  //       id: 5,
  //       done: true,
  //       task: "Clean your flat",
  //     },
  //     {
  //       id: 6,
  //       done: true,
  //       task: "Wash the dishes",
  //     },
  //     {
  //       id: 7,
  //       done: true,
  //       task: "Pay your bills",
  //     },
  //     {
  //       id: 8,
  //       done: false,
  //       task: "Give water to plants",
  //     },
  //     {
  //       id: 9,
  //       done: true,
  //       task: "Study lesson",
  //     },
  //   ],
  // };
  //! Constructor method state
  constructor(props) {
    super(props);
    this.state = {
      done: [
        {
          id: 1,
          done: false,
          task: "Make a website",
        },
        {
          id: 2,
          done: false,
          task: "Walk with your dog",
        },
        {
          id: 3,
          done: true,
          task: "Cook dinner",
        },
        {
          id: 4,
          done: true,
          task: "Go to supermarket",
        },

        {
          id: 5,
          done: true,
          task: "Clean your flat",
        },
        {
          id: 6,
          done: true,
          task: "Wash the dishes",
        },
        {
          id: 7,
          done: true,
          task: "Pay your bills",
        },
        {
          id: 8,
          done: false,
          task: "Give water to plants",
        },
        {
          id: 9,
          done: true,
          task: "Study lesson",
        },
      ],
    };
    this.changeTodo = this.changeTodo.bind(this);
  }
  //? Click function for done not done (with arrow function)
  // changeTodo = (object) => {
  //   //store my array in a variable
  //   let newObj = this.state.done;
  //   this.setState(
  //     newObj.map((content) => {
  //       // if content which clicked and one of the task matched; revetse "done" element
  //       if (object.target.previousElementSibling.textContent === content.task) {
  //         content.done = !content.done;
  //       }
  //       this.state.done = newObj;
  //     })
  //   );
  // };
  //! old way (with old type of function)
  changeTodo(object) {
    let newObj = this.state.done;
    this.setState(
      newObj.map((content) => {
        // if content which clicked and one of the task matched; reverse "done" element
        if (object.target.previousElementSibling.textContent === content.task) {
          content.done = !content.done;
        }
        this.state.done = newObj;
      })
    );
  }
  //? adding new task ------------
  addItem = (value) => {
    //new object for new task
    let newItem = { id: this.state.done.length + 1, task: value, done: false };
    this.setState({
      done: [...this.state.done, newItem],
    });
    console.log(this.state.done);
  };

  render() {
    const { done } = this.state;
    return (
      <div className="mt-5 ml-3">
        {/* //!call done todo map //! call not done map */}
        {/* Call event function */}
        <Donemap
          donetodos={done}
          clickFunction={this.changeTodo}
          //add new task
          handleAddTodo={this.addItem}
        ></Donemap>
        {/* Call event function */}
        <Notdonemap
          notdonetodos={done}
          clickFunction={this.changeTodo}
        ></Notdonemap>
      </div>
    );
  }
}
export default todoContainer;
