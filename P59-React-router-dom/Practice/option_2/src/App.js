import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Navigation from './components/Navigation'
import Post from './components/Post'
import {getPosts} from './store/store'
import React, { useState } from 'react'

export const AppContext = React.createContext()

function App() {
  const [posts, setPosts] = useState(getPosts())
  const addComment = (id, author, text) => {
    const index = posts.findIndex(p => p.postId === id)
    const postsTmp = [...posts];
    const comments = [...postsTmp[index].comments, { author, text }]
    postsTmp[index] = { ...postsTmp[index], comments }
    setPosts(postsTmp)
  }

  return (
    <div className="App">
      <AppContext.Provider value={{
        posts: posts,
        addComment: addComment
      }}>
      <Navigation/>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/post" component={Post} />
      </Switch>
      </AppContext.Provider>
    </div>
  );
}

export default App;
