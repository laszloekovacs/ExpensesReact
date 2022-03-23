import {createContext} from 'react';

// {date, name, amount}

const contextDefaults = {
	expenses: [],
	budget: 12,
};

export const ExpensesContext = createContext(contextDefaults);

export default function Context({children}) {
	return (
		<ExpensesContext.Provider value={contextDefaults}>
			{children}
		</ExpensesContext.Provider>
	);
}
