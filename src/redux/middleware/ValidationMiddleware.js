export const ValidationMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log('LOGGEDIN');
      if (action.type !== 'BLOCKED_ACTION') {
        next(action);
      } else {
        console.error('invalid action');
      }
    };
  };
};

export default ValidationMiddleware;
