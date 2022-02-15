import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={476}
        height={300}
        viewBox="0 0 476 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        style={{ width: '100%' }}
    >
        <circle cx="245" cy="70" r="55" />
        <rect x="129" y="135" rx="0" ry="0" width="231" height="43" />
        <rect x="172" y="190" rx="0" ry="0" width="144" height="14" />
        <rect x="140" y="215" rx="0" ry="0" width="214" height="44" />
        <rect x="140" y="275" rx="0" ry="0" width="93" height="41" />
        <rect x="258" y="274" rx="0" ry="0" width="93" height="44" />
    </ContentLoader>
)

export default MyLoader
