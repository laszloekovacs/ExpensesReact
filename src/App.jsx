import React from 'react';
import ReactDOM from 'react-dom';

//- custom components
import Header from './components/Header';
import Budget from './components/Budget';
import List from './components/List';
import Context from './Context';

const elem = (
	<>
		<Budget></Budget>
		<Header></Header>
		<List></List>
	</>
);

/*
 * Render to dom
 */
ReactDOM.render(elem, document.getElementById('app'));
