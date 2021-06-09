import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import About from '../pages/About';
import Home from '../pages/Home';

import '../styles/app.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
