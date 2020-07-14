import React from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image"

class BlogPost extends React.Component {
	render() {
		const { title, html, date, previous, next, featuredImage, featuredImageAlt } = this.props.pageContext;
		return (
			<div>
				<h1>{title}</h1>
				<p>{date}</p>
				<Img fluid={featuredImage.childImageSharp.fluid} alt={featuredImageAlt} />
				<div dangerouslySetInnerHTML={{ __html: html }} />
				<hr />
				<ul>
					<li>
						{previous && (
							<Link to={previous.fields.slug} rel="prev">
								← {previous.frontmatter.title}
							</Link>
						)}
					</li>
					<li>
						{next && (
							<Link to={next.fields.slug} rel="next">
								{next.frontmatter.title} →
							</Link>
						)}
					</li>
				</ul>
			</div>
		);
	}
}

export default BlogPost;
