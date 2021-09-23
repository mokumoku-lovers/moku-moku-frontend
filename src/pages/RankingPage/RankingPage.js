import React from 'react'
import RankingListItem from './RankingListItem'
import classes from './RankingPage.module.css'

const RankingPage = () => {
    return (
        <div className={classes.container}>
            <h1>Leaderboard</h1>
            <section>
                <RankingListItem />
                <RankingListItem />
                <RankingListItem />
                <RankingListItem />
                <RankingListItem />
                <RankingListItem />
                <RankingListItem />
                <RankingListItem />
                <RankingListItem />
            </section>
        </div>
    )
}

export default RankingPage
