import * as types from '../types/user';

export const loginUser = (user, token) => ({
  user,
  token,
  type: types.LOGIN_USER,
});

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});