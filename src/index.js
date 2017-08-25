import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App/App.component';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'

import store from "./store";

const elem = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(
	elem, 
	document.getElementById('root')
);

registerServiceWorker();
