import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './modules';
import App from './components/App';

export const preloadedState = {
	counter: {
		count: 0,
	},
};

const store = createStore(rootReducer, preloadedState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('.Root')
);
