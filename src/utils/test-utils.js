import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';

import reducer, { rootPreloadedState } from '../modules';

function getInitialStore(initialState) {
	if (!initialState) return rootPreloadedState;

	const newState = Object.assign(rootPreloadedState);

	for (const key in initialState) {
		for (const state in rootPreloadedState) {
			for (const subState in rootPreloadedState[state]) {
				if (key === subState) {
					newState[state] = initialState;
				}
			}
		}
	}

	return newState;
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
