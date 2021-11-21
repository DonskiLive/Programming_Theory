import React from 'react'
import './Comment.css'

export default function Comment({author, text}){
	return(
		<div className="comment">
			<h2>{author}</h2>
			<p>{text}</p>
		</div>
	)
}