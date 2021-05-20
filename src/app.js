import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import { Home, Signin, Signup, Browse } from './pages'
import { useAuthListener } from './hooks'
import { ShouldRedirectUser, ProtectedRoute } from './helpers/routes'

export function App() {
  const { user } = useAuthListener()

  return (
    <Router>
      <Switch>
        <ShouldRedirectUser user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </ShouldRedirectUser>

        <ShouldRedirectUser user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </ShouldRedirectUser>

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        <ShouldRedirectUser user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </ShouldRedirectUser>
      </Switch>
    </Router>
  );
}
