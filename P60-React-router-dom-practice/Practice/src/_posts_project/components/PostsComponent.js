import React from 'react';
import { Route } from 'react-router-dom';
import PostListComponent from './PostListComponent';
import PostViewComponent from './PostViewComponent';

// eslint-disable-next-line
export default ()=> {

    return (
        <div style = {{display:'flex'}}>
            <PostListComponent/>
            <Route path = '/posts/:id' component = {PostViewComponent}  />
        </div>
    )
};


