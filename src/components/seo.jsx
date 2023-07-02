// src/components/seo.js
import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description, eyecatch, type }) => {
	return (
		<Helmet
			htmlAttributes={{ lang: "ja-jp" }}
			title={title}
			titleTemplate={`%s`}
			meta={[
				{
					name: `description`,
					content: description,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: description,
				},
				{
					property: `og:image`,
					content: eyecatch,
				},
				{
					property: `og:type`,
					content: type,
				},
				{
					property: `og:site_name`,
					content: `Hengineer.tech`,
				},
				{
					property: `og:locale`,
					content: `ja_JP`,
				},
				{
					property: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					property: `twitter:site`,
					content: `@hengineer_`,
				},
			]}
		/>
	)
}

export default Seo