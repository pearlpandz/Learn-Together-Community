import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// Stylesheets
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

// Common
import Header from './common/header/header.js';

// Pages
import Posts from './posts/posts.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={Posts} />
          {/* <Route exact path="/*" component={Wildcard} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
