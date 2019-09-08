import React from 'react';
import APIService from '../../Utils/APIService';
import withScreenSize from '../../Utils/withScreenSize';

class RegisterForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    APIService.post({
      url: '/users/register',
      body: { email, password },
    }).then((response) => {
      console.log(response);
    });
  }

  render() {
    console.log(this.props);

    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Register</h4>
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

const mapScreenToProps = (width, height) => ({
  screen: { width, height }
});

export default withScreenSize(mapScreenToProps)(RegisterForm);
