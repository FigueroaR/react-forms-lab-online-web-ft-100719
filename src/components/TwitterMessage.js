import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChars = (event) => {
    this.setState({
      message: event.target.value
    }, console.log(this.state.message) )
  }

  render() {
    let charcaters = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChars} value={this.state.message}/>
        <h1>{this.state.message}</h1>
        {charcaters}
      </div>
    );
  }
}

export default TwitterMessage;
