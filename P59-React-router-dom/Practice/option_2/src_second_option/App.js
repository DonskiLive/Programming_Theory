import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Navigation from './components/Navigation';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/post" component={Post} />
      </Switch>
    </div>
  );
}

export default App;
