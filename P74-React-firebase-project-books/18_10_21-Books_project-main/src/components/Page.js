import { Route, Switch } from 'react-router-dom';
import Books from './Books';
import Home from './Home';
import BookCreator from './BookCreator';
import Login from './Login';
import BookEditor from './BookEditor';
import BookContent from './BookContent';
import Search from './Search';

const Page = ()=>{
    return(
        <Switch>
        <Route exact path = "/book/:id" component = {BookEditor}/>     
        <Route exact path = "/book/content/:id" component = {BookContent}/>     
        <Route path ="/books" component ={Books} /> 
        <Route path ="/bookCreator" component ={BookCreator} />
        <Route path ="/login" component = {Login} />
        <Route exact path ="/search" component = {Search} />
        <Route path ="/" component ={Home} />
      </Switch>
    )
}

export default Page