import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
export default class SpinnerCard extends Component {
  render() {
    return (
      <div className="card mb-3 mt-3 shadow-sm">
        <div className="card-body">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  }
}
