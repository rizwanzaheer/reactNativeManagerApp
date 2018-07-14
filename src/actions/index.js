import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
}


export const passwordChanged = (text) => {
  return {
    payload: text,
    type: PASSWORD_CHANGED
  };
};