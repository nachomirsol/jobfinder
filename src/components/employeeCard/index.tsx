/** Assets */
import { EditIcon } from '../../assets/icons/edit/index';
import { DeleteIcon } from 'assets/icons/delete';
/** Styles */
import './styles/employeeCard.scss';

export const EmployeeCard = () => {
	return (
		<div className='employeeCard'>
			<div className='employeeCard__img'></div>
			<div className='employeeCard__content'>
				<span className='employeeCard__content-age'>33 yeard old</span>
				<span className='employeeCard__content-name'>Nachal</span>
				<span className='employeeCard__content-salary'>33000 Euros</span>
			</div>
			<div className='employeeCard__actions'>
				<span className='employeeCard__actions--edit'>
					<EditIcon />
				</span>
				<span className='employeeCard__actions--delete'>
					<DeleteIcon />
				</span>
			</div>
		</div>
	);
};
