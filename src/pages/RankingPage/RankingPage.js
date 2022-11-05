import React from 'react'
import RankingListItem from './RankingListItem'
import classes from './RankingPage.module.css'
import { Avatar } from '../../components/UI/Avatar/Avatar'
import Badge from '../../components/UI/Badge/Badge'
import Button from '../../components/UI/Button/Button'
import ButtonSecondary from '../../components/UI/Button/ButtonSecondary'
import Point from '../../components/UI/Point/Point'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from '../../axios/axiosInstanceFunction'
import RankingPageLoader from '../../components/Ranking/RankingPageLoader'
import Icon from '../../icon.svg'

const mockData = [
    {
        name: 'User1',
        point: '7000',
        img_src:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        rank: '1st',
    },
    {
        name: 'User2',
        point: '5000',
        img_src:
            'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        rank: '2nd',
    },
    {
        name: 'User3',
        point: '3000',
        img_src:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        rank: '3rd',
    },
]

const RankingPage = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios('http://168.138.215.26:9000').get(
                    '/users'
                )
                console.log(response, 'This is the users')
            } catch (err) {
                console.log(err)
            } finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className={classes.container}>
            <h1>Leaderboard</h1>
            {isLoading ? (
                <RankingPageLoader />
            ) : (
                <section>
                    <Avatar className={classes.avatar} src={Icon} />
                    <Badge className={classes.badge} />
                    <Point className={classes.point} point={7000} />

                    <div className={classes.buttons}>
                        <ButtonSecondary>Friends</ButtonSecondary>
                        <Button>Global</Button>
                    </div>
                    {mockData.map((item) => (
                        <RankingListItem
                            key={item.name}
                            name={item.name}
                            img_src={item.img_src}
                            point={item.point}
                            rank={item.rank}
                        />
                    ))}
                </section>
            )}
        </div>
    )
}

export default RankingPage
