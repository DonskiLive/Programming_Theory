import './App.css';
import Navigation from './components/Navigation';
import Page from './components/Page';
import {connect} from'react-redux'
import Loader from './components/Loader';

function App({isLoading}) {
  return (
    <div className="App">
      <Navigation />
      {isLoading ? <Loader /> : <Page />}    
    </div>
  );
}

const mapStateToProps = ({AppReducer}) =>{
  return{
    isLoading: AppReducer.isLoading
  }
}

export default connect(mapStateToProps)(App);
