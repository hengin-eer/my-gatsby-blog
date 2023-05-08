// src/components/footer.js
import React from "react"
import "../styles/footer.css"

export default function Footer() {
	return (
		<footer className="footer">
			&copy; {new Date().getFullYear()} Hengineer.tech
		</footer>
	)
}