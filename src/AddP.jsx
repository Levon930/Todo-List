import React from "react";

class Apps extends React.Component {
  constructor(props) {
    super(props);

    this.submitNote = this.submitNote.bind(this);

    this.state = {
      userInput: ``,
      shouldShowElem: false,
    };
  }

  submitNote() {
    this.setState({
      shouldShowElem: true,
    });
  }

  render() {
    return (
      <div className="data">
        Input here
        {this.state.shouldShowElem && (
          <div className="elem">{this.state.userInput}</div>
        )}
        <button onClick={this.submitNote}>Click Me</button>
      </div>
    );
  }
}
export default Apps;
