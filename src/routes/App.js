import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AutoScrollToTop from '../components/AutoScrollToTop';
import Layout from '../components/Layout';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import '../styles/app.scss';

const App = () => {
  return (
    <Router>
      <AutoScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
