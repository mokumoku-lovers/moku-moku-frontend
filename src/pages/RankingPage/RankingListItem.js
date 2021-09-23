import React from 'react'
import classes from './RankingListItem.module.css'

const RankingListItem = () => {
    return (
        <div className={classes.container}>
            <p className={classes.rank_number}>1st</p>
            <img
                className={classes.avatar}
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
                alt="user profile"
            />
            <p className={classes.name}>Hatori</p>
            <p className={classes.point}>7000 PT</p>
        </div>
    )
}

export default RankingListItem
