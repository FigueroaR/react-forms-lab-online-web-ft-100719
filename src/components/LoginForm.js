import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleOnUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleOnPassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return ;
    this.props.handleLogin(this.state)
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleOnUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleOnPassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
