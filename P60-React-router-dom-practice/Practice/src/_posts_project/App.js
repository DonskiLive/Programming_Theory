import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import PostsComponent from './components/PostsComponent';
import PostViewComponent from './components/PostViewComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route path='/' exact component={HomeComponent} />
        <Route path='/about' component={AboutComponent} />
        <Route path='/posts' component={PostsComponent} />

      </Switch>
    </div>

  );
}

export default App;

// <Route path = '/posts/:id' component = {PostViewComponent}  />