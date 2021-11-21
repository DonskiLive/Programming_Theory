import '../css/App.css';
import CardList from './CardList';
import Title from './Title';
import {getCards} from '../store/store.js'

function App() {
  return (
    <div className="App">
      <Title title='Book shop'/>
      <CardList cards={getCards()}/>
    </div>
  );
}

export default App;
