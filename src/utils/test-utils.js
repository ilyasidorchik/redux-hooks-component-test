import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';

import reducer, { rootPreloadedState } from '../modules';

function getInitialStore(initialState) {
	if (!initialState) return rootPreloadedState;

	return {
		...rootPreloadedState,
		counter: initialState,
	};
}

function render(
	ui,
	{
		initialState,
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
