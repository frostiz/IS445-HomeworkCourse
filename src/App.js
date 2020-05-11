import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import history from "./utils/history.js";

import Home from "./views/Home";
import Create from "./views/Create";
import NavBar from "./views/NavBar";
import NoMatch from "./views/NoMatch";

import './App.css';

const NavBarWithRouter = withRouter(NavBar);

function App() {
	return (
		<Router history={history}>
			<NavBarWithRouter />
			<div className="content-wrapper">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/create" component={Create} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
