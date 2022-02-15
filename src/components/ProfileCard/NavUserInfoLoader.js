import React from 'react'
import ContentLoader from 'react-content-loader'

const NavUserInfoLoader = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={120}
        viewBox="0 0 300 120"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="40" cy="50  " r="41" />
        <rect x="120" y="25" rx="0" ry="0" width="215" height="30" />
        <rect x="120" y="75" rx="0" ry="0" width="189" height="15" />
    </ContentLoader>
)

export default NavUserInfoLoader
