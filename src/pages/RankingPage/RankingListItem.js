import React from 'react'
import classes from './RankingListItem.module.css'
import { ordinal_suffix_of } from '../../utils/numberToOrdinal'

const RankingListItem = ({ rank, img_src, name, point }) => {
    return (
        <div className={classes.container}>
            <p className={classes.rank_number}>{ordinal_suffix_of(rank)}</p>
            <img className={classes.avatar} src={img_src} alt="user profile" />
            <p className={classes.name}>{name}</p>
            <p className={classes.point}>{point} PT</p>
        </div>
    )
}

export default RankingListItem
