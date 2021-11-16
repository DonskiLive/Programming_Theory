import './App.css';
import MyButton from './Button';

const pStyle = {
  padding: '5px',
  border: '1px solid black',
  opacity: 0.5,
  width: '200px'
}

const a = 20, b = 150;

function hello(){
  return 'hello!'
}
function getText(){
  return(
    <h2>More text</h2>
  )
}

function getError(){
  return(
    <h2>Some error</h2>
  )
}

/* const arr = [
  <li key = '1'>Item1</li>,
  <li key = '2'>Item2</li>,
  <li key = '3'>Item3</li>
] */

const names = ['Ivan', 'Anna', 'Lisa', 'Petr'];


export default function App() {
  return (
    <div className = 'container'>
    <h1 id = 'myTitle' className = 'title' style = {{color:'red', backgroundColor: 'black', width: '500px'}}>Hello React!!!</h1>
    <p style = {pStyle}>some text</p>
    <small>{hello()} ------------ { a + b }</small>
    <hr/>
    {Math.random()>0.5 ? getText(): getError()}
    <ul>
      {names.map((item,index) =><li key = {index}>{item}</li>)}
    </ul>
    <p>example</p>
    <p>more example</p>
    <MyButton/>
  </div>
  
    
  );
}

//export default App;
