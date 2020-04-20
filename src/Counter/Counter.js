import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ dispatch, count }) => {
	const increment = () => {
		dispatch({ type: 'INCREMENT' });
	};

	const decrement = () => {
		dispatch({ type: 'DECREMENT' });
	};

	return (
		<div>
			<h2>Counter</h2>
			<div>
				<button onClick={decrement}>−</button> 
				<span data-testid="count-value">{count}</span> 
				<button onClick={increment}>+</button>
			</div>
		</div>
	);
};

export default connect((state) => ({ count: state.count }))(Counter);
