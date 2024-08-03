import Cookies from 'js-cookie';

export const loginSuccess = (user) => {
  Cookies.set('user', user);
  return {
    type: 'LOGIN_SUCCESS',
    payload: user
  };
};

export const logout = () => {
  Cookies.remove('user');
  return {
    type: 'LOGOUT'
  };
};

export const checkAuthStatus = () => {
  return dispatch => {
    const user = Cookies.get('user');
    if (user) {
      dispatch(loginSuccess(user));
    }
  };
};
