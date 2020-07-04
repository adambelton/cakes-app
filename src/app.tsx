import { Favourites } from '@pages/favourites';
import { Vote } from '@pages/vote';
import { Absolute, Canvas, Column } from '@ui';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export const App = () => {
	return (
		<Canvas>
			<Router>
				<Absolute top="20px" left="20px">
					<Column alignItems="flex-start">
						<Link to="/">Vote</Link>
						<Link to="/favourites">Favourites</Link>
					</Column>
				</Absolute>
				<Switch>
					<Route path="/favourites">
						<Favourites />
					</Route>
					<Route path="/">
						<Vote />
					</Route>
				</Switch>
			</Router>
		</Canvas>
	);
};
