import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPass: ''
    };
  }
  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };
  onPassChange = event => {
    this.setState({ signInPass: event.target.value });
  };
  onSubmitSignIn = () => {
    fetch('http://localhost:8080/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPass
      })
    })
      .then(res => res.json())
      .then(data => console.log(data));
    this.props.onRouteChange('home');
  };
  render() {
    return (
      <div className="signin">
        <h2>Sign In</h2>
        <form>
          <div>
            <label htmlFor={'email'}>Email</label>
            <input id="email" type="email" onChange={this.onEmailChange} />
          </div>
          <div>
            <label htmlFor={'password'}>Password</label>
            <input id="password" type="password" onChange={this.onPassChange} />
          </div>
          <button onClick={this.onSubmitSignIn} type="submit">
            Sign In
          </button>
        </form>
        <a onClick={() => this.props.onRouteChange('register')}>Register</a>
      </div>
    );
  }
}

export default SignIn;
