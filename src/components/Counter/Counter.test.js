import React from 'react';
import { createStore } from 'redux';

import { rootPreloadedState } from '../../modules';
import { render, fireEvent } from '../../utils/test-utils';
import ConnectedCounter from '.';

describe('Counter', () => {
	it('renders with redux with defaults', () => {
		const { container } = render(<ConnectedCounter />);
		const buttonIncrement = container.querySelector(
			'.Counter-Button_increment'
		);
		const value = container.querySelector('.Counter-Value');

		fireEvent.click(buttonIncrement);

		expect(value).toHaveTextContent('1');
	});

	it('renders with redux with custom initial state', () => {
		const { container } = render(<ConnectedCounter />, {
			initialState: { ...rootPreloadedState, counter: { count: 3 } },
		});
		const buttonDecrement = container.querySelector(
			'.Counter-Button_decrement'
		);
		const value = container.querySelector('.Counter-Value');

		fireEvent.click(buttonDecrement);

		expect(value).toHaveTextContent('2');
	});

	it('renders with redux with custom store', () => {
		const store = createStore(() => ({
			...rootPreloadedState,
			counter: { count: 1000 },
		}));

		const { container } = render(<ConnectedCounter />, {
			store,
		});
		const buttonIncrement = container.querySelector(
			'.Counter-Button_increment'
		);
		const buttonDecrement = container.querySelector(
			'.Counter-Button_decrement'
		);
		const value = container.querySelector('.Counter-Value');

		fireEvent.click(buttonIncrement);
		expect(value).toHaveTextContent('1000');

		fireEvent.click(buttonDecrement);
		expect(value).toHaveTextContent('1000');
	});
});
