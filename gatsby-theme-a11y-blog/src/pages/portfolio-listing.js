import React from 'react';
import Img from "gatsby-image"

class PortfolioListing extends React.Component {
	render() {
		const portfolioListings = this.props.pageContext.portfolio;

		return (
			<div>
				<h1>Portfolio</h1>
				{portfolioListings.map((portfolio, index) => {
					return (
						<div key={index}>
							<h2>{portfolio.node.frontmatter.title}</h2>
							<Img fixed={portfolio.node.frontmatter.image.childImageSharp.fixed} alt="" />
						</div>
					);
				})}
			</div>
		);
	}
}

export default PortfolioListing;
