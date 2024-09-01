// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={PostList} exact />
        <Route path="/create" component={CreatePost} />
      </Switch>
    </Router>
  );
}

export default App;