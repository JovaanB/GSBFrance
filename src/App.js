import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllPraticiens from './pages/AllPraticiens';
import AllMedicaments from './pages/AllMedicaments';
import Home from './pages/Home';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/praticiens">
            <AllPraticiens />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/medicaments">
            <AllMedicaments />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
