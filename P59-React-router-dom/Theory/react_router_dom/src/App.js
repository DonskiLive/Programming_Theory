import { Route, Switch } from 'react-router-dom';
import Contacts from './components/Contacts';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import List from './components/List';
import ViewListComponent from './components/ViewListComponent';


function App() {
  return (
    <div className="App">
      <Navigation />
      <hr />
      <Switch>
        <Route path='/list/:id/:title' component={ViewListComponent} />
        <Route path="/list" component={List} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/" component={Home} />
      </Switch>


    </div>
  );
}

export default App;


/* <Route exact path ="/" render = {()=><h2>Home page</h2>}/>
        <Route path ="/about" render = {()=><About companyName = {'some company'} />} />
        <Route path = "/contacts" render = {()=><Contacts />} /> */
