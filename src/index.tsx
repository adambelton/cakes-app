import React from 'react';
import ReactDOM from 'react-dom';
import { CakesList } from './components/cakes-list';

const root = document.getElementById('root');

const App = () => {
	return <CakesList />;
};

ReactDOM.render(<App />, root);
