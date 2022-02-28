/** Components */
import { Search } from 'components/search';
import { EmployeeList } from 'components/employeeList';
/** Styles */
import './app.scss';

export const App = () => {
	return (
		<div className='app'>
			<h3>Search your Employee</h3>
			<Search />
			<EmployeeList />
		</div>
	);
};
