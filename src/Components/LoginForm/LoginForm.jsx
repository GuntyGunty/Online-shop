import React from 'react';
import APIService from '../../Utils/APIService';
import { loginUser } from '../../store/actions/user';
import { connect } from 'react-redux'; 

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { loginUser } = this.props;
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    APIService.post({
      url: '/users/login',
      body: { email, password },
    }).then((response) => {
      if (response.status === 'success') {
        loginUser(response.data.user, response.data.token);
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Login</h4>
        <label>
          <span>Email</span>
          <input name="email" style={{ display: 'block' }} type="email" placeholder="Your email" />
        </label>
        <label>
          <span>Password</span>
          <input name="password" style={{ display: 'block' }} type="password" placeholder="Password" />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user, token) => dispatch(loginUser(user, token)),
});

export default connect(null, mapDispatchToProps)(LoginForm);