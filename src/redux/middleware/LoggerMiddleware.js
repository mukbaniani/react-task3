export const LoggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      next(action);
      console.log('LOGGEDIN');
    };
  };
};

export default LoggerMiddleware;
