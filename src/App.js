import { Route, Switch } from 'react-router';
import './App.css';
import Navigation from './components/navigation';
import React, { Suspense } from 'react';
import PostProviderComponent from './provider/PostProvider';

const SingIn = React.lazy(() => import('./components/forms/sing-in'));
const SingUp = React.lazy(() => import('./components/forms/sing-up'));
const Home = React.lazy(() => import('./pages/home'));
const PicturesPage = React.lazy(() => import('./pages/picture-page'));

function App() {
  return (
    <div className="App">
      <Navigation />
      <PostProviderComponent>
        <Suspense fallback={<div className="row">loading...</div>}>
          <Switch>
            <Route path="/login">
              <SingIn />
            </Route>

            <Route path="/register">
              <SingUp />
            </Route>

            <Route path="/pictures">
              <PicturesPage />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </PostProviderComponent>
    </div>
  );
}

export default App;
