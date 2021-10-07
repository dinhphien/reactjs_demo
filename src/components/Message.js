import React, { Component } from "react";
import "../style/Message.css";
export default class Message extends Component {
  render() {
    const { message } = this.props;
    return <p className="message-info">{message}</p>;
  }
}
