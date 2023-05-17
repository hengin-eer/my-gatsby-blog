// src/components/header.js
import React from "react"
import { Link } from "gatsby"
import LOGO_IMG from "../../static/logo.png"
import { FiGithub, FiTwitter } from "react-icons/fi"
import "../styles/header.css"

export default function Header() {
	const myTwitter = "https://twitter.com/hengineer_"
	const myGitHub = "https://github.com/hengin-eer"
	return (
		<header>
			<Link to="/">
				<img src={LOGO_IMG} className="logo-image" alt="logo"></img>
			</Link>
			<ul className="header-nav">
				<li>
					<Link to={myTwitter}><FiTwitter /></Link>
				</li>
				<li>
					<Link to={myGitHub}><FiGithub /></Link>
				</li>
			</ul>
		</header>
	)
}