import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './duck';

const Counter = () => {
	const count = useSelector(state => state.count);
	const dispatch = useDispatch();

	const handleDecrease = () => {
		dispatch(decrement());
	};

	const handleIncrease = () => {
		dispatch(increment());
	};

	return (
		<div className="Counter">
			<h2>Counter</h2>
			<div>
				<button
					className="Counter-Button Counter-Button_decrement"
					onClick={handleDecrease}
				>
					−
				</button>

				<span className="Counter-Value">{count}</span>

				<button
					className="Counter-Button Counter-Button_increment"
					onClick={handleIncrease}
				>
					+
				</button>
			</div>
		</div>
	);
};

export default Counter;
