import React from 'react';
import { createStore } from 'redux';

import { render, screen, fireEvent } from '../utils/test-utils';
import ConnectedCounter from '.';

describe('Counter', () => {
	it('renders with redux with defaults', () => {
		render(<ConnectedCounter />);

		fireEvent.click(screen.getByText('+'));

		expect(screen.getByTestId('count-value')).toHaveTextContent('1');
	});

	it('renders with redux with custom initial state', () => {
		render(<ConnectedCounter />, {
			initialState: { count: 3 },
		});

		fireEvent.click(screen.getByText('−'));

		expect(screen.getByTestId('count-value')).toHaveTextContent('2');
	});

	it('renders with redux with custom store', () => {
		const store = createStore(() => ({ count: 1000 }));

		render(<ConnectedCounter />, {
			store,
		});

		fireEvent.click(screen.getByText('+'));
		expect(screen.getByTestId('count-value')).toHaveTextContent('1000');

		fireEvent.click(screen.getByText('−'));
		expect(screen.getByTestId('count-value')).toHaveTextContent('1000');
	});
});
