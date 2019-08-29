import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import APISerice from './Utils/APIService';

import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import Logo from './Components/Logo/Logo';
import Card from './Components/Card/Card';
import Filter from './Components/Filter/Filter';

import HomePage from './Pages/Home/HomePage';
import CataloguePage from './Pages/Catalogue/CataloguePage';

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Header>
					<Link to="/catalogue">Catalogue</Link>
					<Link to="/">Home</Link>
				</Header>
				<Route path="/" component={() => { window.scrollTo(0, 0); return (<></>); }} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/catalogue" component={CataloguePage} />
					<Route component={() => <h1>Not found!</h1>} />
				</Switch>
			</div>
		);
	}
};
