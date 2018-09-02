import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }
  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  onNameChange = e => {
    this.setState({ name: e.target.value });
  };
  onPassChange = e => {
    this.setState({ password: e.target.value });
  };
  onSubmitRegister = () => {
    fetch('http://localhost:8080/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          console.log(data);
          this.props.loadUser(data);
          this.props.onRouteChange('home');
        }
      });
  };
  render() {
    return (
      <div className="register">
        <h2>Register</h2>
        <form>
          <div>
            <label htmlFor={'name'}>Name</label>
            <input id="name" type="text" onChange={this.onNameChange} />
          </div>
          <div>
            <label htmlFor={'email'}>Email</label>
            <input id="email" type="email" onChange={this.onEmailChange} />
          </div>
          <div>
            <label htmlFor={'password'}>Password</label>
            <input id="password" type="password" onChange={this.onPassChange} />
          </div>
          <button onClick={this.onSubmitRegister} type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
