import React, {useContext, useState} from 'react';
import {ExpensesContext} from '../App';

const defaultHeaderState = {
	date: new Date(),
	expenditure: 0,
	amount: 0,
};

const Header = (props) => {
	const [formState, setFormState] = useState(defaultHeaderState);
	const context = useContext(ExpensesContext);

	function handleAddClick(e) {
		e.preventDefault();
		console.log('hello world');
	}

	function handleFormValidation(e) {}

	return (
		<form className="inputs" onChange={handleFormValidation}>
			<label htmlFor="date">Expense date</label>
			<input type="date" id="date"></input>

			<label htmlFor="expenditure">expenditure</label>
			<input type="text" id="expenditure" />

			<label htmlFor="amount">Amount</label>
			<input type="number" id="amount" min="0" />

			<button onClick={handleAddClick}>Add</button>
		</form>
	);
};

export default Header;
