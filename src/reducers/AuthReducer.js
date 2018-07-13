import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: ''
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        ...action.payload
      };
    default: return state;
  }
};