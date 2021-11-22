import React from 'react'
import './PostListRow.css'

export default function PostListRow({ author, date, title, shortDesc, comments }){
	return (
		<>
			<p>{author}</p>
			<p>{date}</p>
			<h2>{title}</h2>
			<h5>{shortDesc}</h5>
			<h4 className="counter-bg">Comments: <span>{comments.length}</span></h4>
		</>
	)
}