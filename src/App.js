import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Signin, ScrollToTop } from './components';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />
      </Switch>
    </Router>
  );
}

export default App;