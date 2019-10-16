import React, { Component } from "react";
import "./App.css";
import * as api from "./api";

class App extends Component {
  state = {};

  handleSubmit = event => {
    event.preventDefault();
    console.log("in handleSubmit");
    api.sendMessage(event.target.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="handle">Handle</label>
        <input id="handle" type="text" />
        <label htmlFor="message">Message</label>
        <input id="message" type="text" />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default App;
