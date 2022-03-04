/** Components */
import { EmployeeCard } from 'components/employeeCard';
/** Styles */
import './styles/employeeList.scss';

export const EmployeeList = () => {
	return (
		<div className='employeeList'>
			{[1, 2, 3, 4, 5, 6].map(() => {
				return <EmployeeCard />;
			})}
		</div>
	);
};
