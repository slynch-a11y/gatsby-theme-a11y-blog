import React from 'react';
import { Link } from 'gatsby';

class BlogListing extends React.Component {
	render() {
        const blogListings = this.props.pageContext.blogs;
    
		return (
			<div>
				<h1>Blog Posts</h1>
				{blogListings.map((blog, index) => {
						return (
							<div key={index}>
								<h2>
									<Link to={blog.node.fields.slug}>
										{blog.node.frontmatter.title}
									</Link>
								</h2>
								<p>{blog.node.excerpt}</p>
							</div>
						);
				})}
			</div>
		);
	}
}

export default BlogListing;
