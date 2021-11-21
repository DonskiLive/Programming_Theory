import { useState } from 'react'
import '../css/App.css';
import Title from './Title';
import { getPosts } from '../store/store.js'
import PostList from './PostList';



const AppF = () => {
	const [posts, setPosts] = useState(getPosts())
	const maxRating = 99

	const changeCounter = (id, isLike, e) => {
		const newPosts = [...posts]
		const index = newPosts.findIndex(post => post.id === id)
		const container = e.currentTarget.parentNode.parentNode.parentNode

		if (index >= 0) {
			const post = { ...newPosts[index] }
			if (isLike && newPosts[index].like < maxRating) {
				newPosts[index].like - newPosts[index].dislike < -1 ? container.classList.add('danger') :	container.classList.remove('danger')
				post.like++
			} else if (!isLike && newPosts[index].dislike < maxRating) {
				newPosts[index].like - newPosts[index].dislike <= 0 ? container.classList.add('danger') : container.classList.remove('danger')
				post.dislike++
			}
			newPosts[index] = post;
			setPosts(newPosts)
		}
	}

	const onLikeClickHandler = (e, id) => {
		changeCounter(id, true, e)
	}
	const onDislikeClickHandler = (e, id) => {
		changeCounter(id, false, e)
	}

	return (
		<div className="App">
			<Title title='Rate post of your friends' />
			<PostList posts={posts}
				onLikeClickHandler={onLikeClickHandler}
				onDislikeClickHandler={onDislikeClickHandler} />
		</div>
	);
}

export default AppF