import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ porp, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { porp, value },
  };
};