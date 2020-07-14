import React from 'react';

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
							<div dangerouslySetInnerHTML={{ __html: portfolio.node.html }} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default PortfolioListing;
