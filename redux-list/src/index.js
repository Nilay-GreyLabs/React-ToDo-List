import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux
import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducers from "./reducers"; //./reducers/index.js

const store = createStore(allReducers);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
		<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
