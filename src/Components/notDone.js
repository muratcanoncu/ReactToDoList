import React, { Component } from "react";
import Todoitem from "./todoItem";
export default class notDone extends Component {
  render() {
    const { notdonetodos } = this.props;
    return (
      <div>
        <h1
          style={{
            color: "white",
            textAlign: "left",
            fontWeight: "bolder",
            marginLeft: "25px",
          }}
        >
          To Do - Done
        </h1>
        {notdonetodos.map((doneContent) => {
          if (doneContent.done) {
            return (
              <Todoitem
                // bridge for my function from grandparent to child
                {...this.props}
                key={doneContent.id}
                task={doneContent.task}
                icon={<i class="fas fa-undo"></i>}
              ></Todoitem>
            );
          } else {
            null;
          }
        })}
      </div>
    );
  }
}
