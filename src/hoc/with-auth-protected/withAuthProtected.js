import { Redirect } from 'react-router';

export const WithAuthProtecred = (Component) => {
  const WithNoAuth = (props) => {
    const token = JSON.parse(localStorage.getItem('auth.token'));
    if (token) {
      return <Redirect to="/" />;
    }
    return <Component {...props} />;
  };
  return WithNoAuth;
};
