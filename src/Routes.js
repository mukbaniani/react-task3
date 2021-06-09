import { Route, Switch } from 'react-router';
import Navigation from './components/navigation';
import React, { Suspense } from 'react';
import * as routes from './utils/routePaths';

const SingIn = React.lazy(() => import('./components/forms/sing-in'));
const SingUp = React.lazy(() => import('./components/forms/sing-up'));
const Home = React.lazy(() => import('./pages/home'));
const PicturesPage = React.lazy(() => import('./pages/picture-page'));
const FakerCompany = React.lazy(() => import('./components/faker-companies'));

function Routes() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<div className="row">loading...</div>}>
        <Switch>
          <Route path={routes.LOGIN_PATH}>
            <SingIn />
          </Route>

          <Route path={routes.REGISTER_PATH}>
            <SingUp />
          </Route>

          <Route path={routes.IMAGES_PATH}>
            <PicturesPage />
          </Route>

          <Route path={routes.FAKER_COMPANY_PATH}>
            <FakerCompany />
          </Route>

          <Route path={routes.HOME_PATH}>
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default Routes;
