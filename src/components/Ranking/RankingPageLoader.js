import React from 'react'
import ContentLoader from 'react-content-loader'

const RankingPageLoader = (props) => (
    <ContentLoader
        speed={2}
        width={650}
        height={400}
        viewBox="0 0 650 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#6eddbc"
        {...props}
    >
        <rect x="33" y="160" rx="3" ry="3" width="650" height="70" />
        <rect x="33" y="240" rx="3" ry="3" width="650" height="70" />
        <rect x="33" y="320" rx="3" ry="3" width="650" height="70" />
        <circle cx="320" cy="80" r="70" />
    </ContentLoader>
)

export default RankingPageLoader
