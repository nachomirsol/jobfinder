import React from 'react';
import { EmployeeContextTypes } from "./types"


const initialContextValues = {
	filters: {
		name: '',
		salary: 0,
		age:30
	},
    employees: [],   
    setFilters: () => ({}),
    setEmployees: () => ([])
}


export const EmployeeDataContext = React.createContext<EmployeeContextTypes>(initialContextValues);