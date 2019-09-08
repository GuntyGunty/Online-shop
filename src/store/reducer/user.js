import * as types from '../types/user';

const initialState = { };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      const { user, token } = action;
      localStorage.setItem('token', token);

      return {
        ...state,
        ...user,
      };
    default:
      return state;
  }
}