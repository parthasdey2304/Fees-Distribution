import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Reports from './pages/Reports';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/reports">Reports</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/reports" component={Reports} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
