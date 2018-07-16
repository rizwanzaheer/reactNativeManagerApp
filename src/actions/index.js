import firbase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firbase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      });
  }
}

export const passwordChanged = (text) => {
  return {
    payload: text,
    type: PASSWORD_CHANGED
  };
};