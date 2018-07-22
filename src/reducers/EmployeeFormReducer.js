import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  shift: '',
  phone: '',
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    default: return state;
  }
};