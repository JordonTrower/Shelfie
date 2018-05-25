import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import AddProduct from './Add';
import Body from './Body';

const Router = () => (
	<HashRouter>
		<div>
			<Header className="App-header" />
			<Switch>
				<Route exact path="/" component={Body} />
				<Route path="/create/:id?" component={AddProduct} />
			</Switch>
		</div>
	</HashRouter>
);
export default Router;
