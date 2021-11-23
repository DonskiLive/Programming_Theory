import './App.css';
import Navigation from './components/Navigation';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import TodoComponent from './components/TodoComponent';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/todo' exact component={TodoComponent} />
      </Switch>
    </div>
  );
}

export default App
