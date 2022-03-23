import React, {useContext} from 'react';
import {ExpensesContext} from '../App';

const Budget = () => {
	const context = useContext(ExpensesContext);

	function calculateTotalExpenses(context) {
		let amount = 0;

		for (let e of context.expenses) {
			amount += e.amount;
		}

		return amount;
	}

	const expenses = calculateTotalExpenses(context);
	const budget = context.budget;
	const remaining = expenses - context.budget;

	return (
		<div className="Budget">
			<div>
				<p>Budget</p>
				<p>{budget || '0'}</p>
				<button>edit</button>
			</div>
			<div>
				<p>Total expenses</p>
				<p>{expenses || '0'}</p>
			</div>
			<div>
				<p>Remaining</p>
				<p>{remaining || '0'}</p>
			</div>
		</div>
	);
};

export default Budget;
