import { Component } from "react";

export default class Score extends Component {
  render() {
    return (
      <>
        <p>
          Date: {this.props.date} - Score: {this.props.score}
        </p>
      </>
    );
  }
}
