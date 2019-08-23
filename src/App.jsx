import React from 'react';
import APISerice from './Utils/APIService';

import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import Logo from './Components/Logo/Logo';
import Card from './Components/Card/Card';
import Filter from './Components/Filter/Filter';

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

	componentDidMount() {
		APISerice.post({
			url: 'user/login',
			body: {
				email: 'mr.glavanar@bk.ru',
				password: '12456',
			},
		}).then((data) => {
			console.log(data);
		});
	}

	render() {
		return (
			<div className="App">
				{/* <form onSubmit={this.onFormSubmit}>
					<label>
						Email
					<input name="email" type="email" />
					</label>
					<label>
						Password
					<input name="password" type="password" />
					</label>
					<input type="submit" />
				</form> */}
				<Container>
					<Header>
						<Logo></Logo>
					</Header>
				</Container>
				<Container variant="flex">
					<Sidebar>

					</Sidebar>
					<Main>
						<Filter>
			
						</Filter>
						<Container variant="inner flex">
							<Card></Card>
							<Card></Card>
							<Card></Card>
						</Container>
					</Main>
				</Container>
			</div>
		);
	}
};
