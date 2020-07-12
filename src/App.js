import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />

          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
