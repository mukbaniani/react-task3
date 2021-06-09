import './App.css';
import React, { useEffect } from 'react';
import Routes from './Routes';
import PostProviderComponent from './provider/PostProvider';
import { useDispatch } from 'react-redux';
import { autoLoginAction } from './redux/actions/middleware-actions';

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(autoLoginAction());
  }, [dispath]);

  return (
    <div className="App">
      <PostProviderComponent>
        <Routes />
      </PostProviderComponent>
    </div>
  );
}

export default App;
