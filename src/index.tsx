import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CatsList } from './components/cats-list';

const root = document.getElementById('root');

const Canvas = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

const App = () => {
	return (
		<Canvas>
			<CatsList />
		</Canvas>
	);
};

ReactDOM.render(<App />, root);
