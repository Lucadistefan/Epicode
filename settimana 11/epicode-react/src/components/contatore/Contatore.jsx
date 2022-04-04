import React from "react";

export default class Contatore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contatore: 0,
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.contatore}</p>
        <button
          onClick={() => this.setState({ contatore: this.state.contatore - 1 })}
        >
          Decrease
        </button>
        <button
          onClick={() => this.setState({ contatore: this.state.contatore + 1 })}
        >
          Increase
        </button>
      </div>
    );
  }
}
