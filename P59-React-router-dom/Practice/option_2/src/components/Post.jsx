import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PostList from './postList/PostList.js'
import PostView from './postView/PostView.js'
import { AppContext } from "../App"
import { useContext } from 'react'

const Post = () => {
  const { posts } = useContext(AppContext)
  function renderRouts() {
    return posts.map((post, index) => <Route key={index} exact path={`/post/${post.postId}`} component={PostView} />)
  }
  return (
    <div className="Post">
      <PostList />
      <Switch>
        {renderRouts()}
      </Switch>
    </div>
  )
}
export default Post