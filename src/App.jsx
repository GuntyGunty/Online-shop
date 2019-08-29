import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import APISerice from './Utils/APIService';

import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import Logo from './Components/Logo/Logo';
import Filter from './Components/Filter/Filter';

import HomePage from './Pages/Home/HomePage';
import CataloguePage from './Pages/Catalogue/CataloguePage';
import ProductPage from './Pages/Product/ProductPage';

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Header>
					<Link to="/catalogue">Catalogue</Link>
					<Link to="/">Home</Link>
				</Header>
				<Cart />
				<Route path="/" component={() => { window.scrollTo(0, 0); return (<></>); }} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/catalogue" component={CataloguePage} />
					<Route exact path="/product/:id" component={ProductPage} />
					<Route component={() => <h1>Not found!</h1>} />
				</Switch>
			</div>
		);
	}
};
