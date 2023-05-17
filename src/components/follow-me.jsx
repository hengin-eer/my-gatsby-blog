import React from 'react'
import { Link } from 'gatsby'
import { FiGithub, FiTwitter } from "react-icons/fi"

export default function FollowMe() {
	const myTwitter = "https://twitter.com/hengineer_"
	const myGitHub = "https://github.com/hengin-eer"

	return (
		<div className='follow-me'>
			<div className="follow-title">\ Follow Me /</div>
			<ul>
				<li>
					<Link to={myTwitter}>
						<FiTwitter />
					</Link>
				</li>
				<li>
					<Link to={myGitHub}>
						<FiGithub />
					</Link>
				</li>
			</ul>
		</div>
	)
}
