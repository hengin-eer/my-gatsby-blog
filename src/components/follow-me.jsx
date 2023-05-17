import React from 'react'
import { Link } from 'gatsby'
import "../styles/follow-me.css"
import { FiGithub, FiTwitter } from "react-icons/fi"

export default function FollowMe() {
	const myTwitter = "https://twitter.com/tim_daik"
	const myGitHub = "https://github.com/hengin-eer"
	const techTwitter = "https://twitter.com/hengineer_"

	return (
		<div className='follow'>
			<div className="follow-title">\ Follow Me /</div>
			<ul className='follow-links'>
				<li>
					<Link to={techTwitter}>
						<FiTwitter />
						<p>技術垢</p>
					</Link>
				</li>
				<li>
					<Link to={myGitHub}>
						<FiGithub />
						<p>開発垢</p>
					</Link>
				</li>
				<li>
					<Link to={myTwitter}>
						<FiTwitter />
						<p>日常垢</p>
					</Link>
				</li>
			</ul>
		</div>
	)
}
