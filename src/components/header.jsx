// src/components/header.js
import React from "react"
import { Link } from "gatsby"
import LOGO_IMG from "../../static/logo.png"
import "../styles/header.css"

export default function Header() {
	return (
		<header>
			<Link to="/">
				<img src={LOGO_IMG} className="logo-image" alt="logo"></img>
			</Link>
		</header>
	)
}