import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';

// import { preloadedState } from '../index';
import reducer from '../modules';

export const preloadedState = {
	counter: {
		count: 0,
	},
};

function getInitialStore(initialState) {
	if (initialState.counter) return initialState;

	preloadedState.counter = initialState;

	return preloadedState;
}

function render(
	ui,
	{
		initialState = preloadedState,
		store = createStore(reducer, getInitialStore(initialState)),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>;
	}

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
