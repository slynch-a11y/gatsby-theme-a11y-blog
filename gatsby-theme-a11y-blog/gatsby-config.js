module.exports = {
    siteMetadata: {
        title: 'Gatsby A11y-Ready Theme',
        author: 'Sarah Lynch',
        url: '',
        description: 'An accessibility-ready Gatsby theme.',
        image: '',
        social: {
            twitter: 'sample',
            linkedIn: 'sample',
            email: 'sample@example.com',
            github: 'sample'
        },
    },
    plugins: [{
            resolve: 'gatsby-source-filesystem',
            options: {
                path: 'src/markdown',
                name: 'markdown'
            }
        },
        'gatsby-transformer-remark',
    ]
}