import './App.css';
import Counter from './components/Counter';
import PlaceHolderPosts from './components/posts/PlaceHolderPosts';
import PostPage from './components/posts/PostPage';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr />
      <PostPage />
      <hr />
      <PlaceHolderPosts />
    </div>
  );
}

export default App;
