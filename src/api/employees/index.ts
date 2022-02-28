/** Libraries */
import axios from 'axios';
/** Constants */
import { EMPLOYEES_API } from 'constants/api';

const { BASE_URL, VERSION } = EMPLOYEES_API;

export const getEmployee = () => {
	return axios.get(`${BASE_URL}/${VERSION}/employee`);
};
