import '../css/App.css';
import CardList from './CardList';
import Title from './Title';
import {getCards} from '../store/store'


function App() {
  return (
    <div className="App">
      <Title title ='My best page' />
      <CardList cards = {getCards()} />        
    </div>
  );
}

export default App;
