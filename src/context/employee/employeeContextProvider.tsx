import { useState, useContext } from 'react';
/** ContextCreate */
import { EmployeeDataContext } from './employeeContext';
/** Types */
import { EmployeeContextProviderType } from './types';

export const RepositoryDataProvider = ({
	children,
}: EmployeeContextProviderType) => {
	const [query, setQuery] = useState('');
	const [salary, setSalary] = useState(0);
	const [employeeList, setEmployeeList] = useState([]);

	return (
		<EmployeeDataContext.Provider
			value={{
				query,
				salary,
				employeeList,
				setQuery,
				setSalary,
				setEmployeeList,
			}}
		>
			{children}
		</EmployeeDataContext.Provider>
	);
};

export const useEmployeeContext = () => {
    const context = useContext(EmployeeDataContext)
    if (!context) {
        throw new Error('useEmployeeContext() called outside of a App?')
    }

    return context
}
