import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import EventsPage from './components/EventsPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';

const App = () => {
  /*   const users: IUser[] = [
      {
        id: 1, name: "Leanne Graham", email: "Sincere@april.biz",
        address: {
          street: "Kulas Light", city: "Gwenborough", zipcode: "92998-3874"
        }
      },
      {
        id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains", city: "Wisokyburgh", zipcode: "90566-7771"
        }
      }
    ]; */

  /*   const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])
  
    useEffect(() => {
      fetchUsers()
      fetchTodos()
    }, [])
  
    async function fetchUsers(){
      try{
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
      }catch (e){
        alert(e)
      }
    }
  
    async function fetchTodos(){
      try{
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(response.data)
      }catch (e){
        alert(e)
      }
    } */

  return (
    <BrowserRouter>
      <div>
        <NavLink style={{ margin: '20px', display: 'inline-block' }} to="/events">Events</NavLink>
        <NavLink style={{ margin: '20px', display: 'inline-block' }} to="/users">Users</NavLink>
        <NavLink style={{ margin: '20px', display: 'inline-block' }} to="/todos">Todos</NavLink>
        <Routes>
          <Route path={'/events'} element={<EventsPage />} />
          <Route path={'/users'} element={<UserPage />} />
          <Route path={'/users/:id'} element={<UserItemPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */