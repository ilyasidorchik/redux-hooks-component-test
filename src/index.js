import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer, { rootPreloadedState } from './modules';
import App from './components/App';

const store = createStore(rootReducer, rootPreloadedState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('.Root')
);
