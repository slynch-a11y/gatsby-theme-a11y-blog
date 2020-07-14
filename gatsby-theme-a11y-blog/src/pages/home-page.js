import React from 'react';
import { Link } from 'gatsby';

class HomePage extends React.Component {
	render() {
		const blogListings = this.props.pageContext.blogs;

		return (
			<div>
				<h1>Welcome</h1>
				<h2>Most Recent Blog Posts</h2>
				{blogListings.map((blog, index) => {
					if (index <= 2) {
						return (
							<div key={index}>
								<h3>
									<Link to={blog.node.fields.slug}>{blog.node.frontmatter.title}</Link>
								</h3>
								<p>{blog.node.excerpt}</p>
							</div>
						);
					} else {
						return null;
					}
				})}
			</div>
		);
	}
}

export default HomePage;
