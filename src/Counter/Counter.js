import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './duck';

const Counter = ({ dispatch, count }) => {
	const handleDecrease = () => {
		dispatch(decrement());
	};

	const handleIncrease = () => {
		dispatch(increment());
	};

	return (
		<div>
			<h2>Counter</h2>
			<div>
				<button onClick={handleDecrease}>−</button> 
				<span data-testid="count-value">{count}</span> 
				<button onClick={handleIncrease}>+</button>
			</div>
		</div>
	);
};

export default connect((state) => ({ count: state.count }))(Counter);
