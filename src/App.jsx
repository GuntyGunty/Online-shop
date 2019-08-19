import React from 'react';

export default class App extends React.Component {
	
	onFormSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		const email = formData.get('email');
		const password = formData.get('password');

		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		fetch('https://edu-online-shop.herokuapp.com/api/v1/user/addOne', {
			headers,
			method: 'POST',
			cache: 'no-cache',
			mode: 'cors',
			body: JSON.stringify({ email, password }),
		}).then((response) => {
			response.json().then((data) => {
				if (!data.isError) {
					localStorage.setItem('token', data.token);
					localStorage.setItem('user', data.user);
				}
			});
		});
	}

	render() {
		return (
			<div className="App">
				<form onSubmit={this.onFormSubmit}>
					<label>
						Email
					<input name="email" type="email" />
					</label>
					<label>
						Password
					<input name="password" type="password" />
					</label>
					<input type="submit" />
				</form>
			</div>
		);
	}
};
