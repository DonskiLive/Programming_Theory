import './App.css';
import { Button, SuccessButton } from './styled/Button';
import Container from './styled/Container';
//import {getPosts, testAddPost} from './service/api'

function App() {

  return (
    <Container >
      <Button primary onClick = {()=> console.log('registration')}>registration</Button>
      <Button >login</Button>
      <SuccessButton>send</SuccessButton>
    </Container>
  );
}

export default App;

/* function App() {
  getPosts()
  testAddPost()
  return (
    <div className="App">
      
    </div>
  );
} */
