import React from 'react'
import logoFull from './img/Group1.png'

export default function MainPageNav() {
	return (
		<div className="navMainPage">
			<div className="navContainer">
				<a className="logo">
					<img src={logoFull} />
				</a>
				<button className="btnSignInMainPage">Sign in</button>
			</div>
		</div>
	)
}