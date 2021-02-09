import React from "react";
import { Navbar } from "react-bootstrap";
export default function navbar() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex justify-content-between"
      >
        <Navbar.Brand
          href="#home"
          style={{
            fontWeight: "bolder",
            fontSize: "3.8rem",
            margin: "0 10px",
            fontFamily: "monospace",
          }}
        >
          ToDo List
        </Navbar.Brand>
        <a
          href="#"
          style={{
            color: "white",
            margin: "0 10px",
            textDecoration: "underline",
            fontSize: "1.2rem",
          }}
        >
          Help
        </a>
      </Navbar>
    </div>
  );
}
