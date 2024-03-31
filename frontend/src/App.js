import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import MoodInput from './components/MoodInput';
import PlaylistGenerator from './components/PlaylistGenerator';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/mood" component={MoodInput} />
        <Route path="/playlist" component={PlaylistGenerator} />
      </Switch>
    </Router>
  );
};

export default App;
