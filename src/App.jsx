import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import APISerice from './Utils/APIService';

import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import Container from './Components/Container/Container';
import Logo from './Components/Logo/Logo';
import Filter from './Components/Filter/Filter';

import HomePage from './Pages/Home/HomePage';
import CataloguePage from './Pages/Catalogue/CataloguePage';
import ProductPage from './Pages/Product/ProductPage';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';

const Title = (props) => {
	const [isOpened, setIsOpened] = useState(false);
	const { title } = props;

	const renderedTitle = typeof title === 'function' ? title(isOpened, setIsOpened) : title;

	return (
		<div className="Title">{renderedTitle}</div>
	);
}

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Header>
					<Title title={(isOpened, setIsOpened) => <div onClick={() => setIsOpened(!isOpened)} >hello {`${isOpened}`}</div>} />
					<Link to="/catalogue">Catalogue</Link>
					<Link to="/">Home</Link>
				</Header>
				<Cart />
				<Route path="/" component={() => { window.scrollTo(0, 0); return (<></>); }} />
				<Container>
					<Sidebar>
						<LoginForm />
						<RegisterForm name="hello" />
					</Sidebar>
					<Main>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route exact path="/catalogue" component={CataloguePage} />
							<Route exact path="/product/:id" component={ProductPage} />
							<Route component={() => <h1>Not found!</h1>} />
						</Switch>
					</Main>
				</Container>
			</div>
		);
	}
};
