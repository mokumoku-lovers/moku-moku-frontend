import React from 'react'
import classes from './UserProfileCard.module.css'
import Trash from '../../../assets/images/trash.svg'
import { deleteDeckById } from '../../../features/deckTitle/deckSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const UserProfileCard = (props) => {
    const dispatch = useDispatch()

    return (
        <div className={classes.container}>
            <Link
                key={props.id}
                to={`/deck/${props.id}`}
                style={{ textDecoration: 'none', color: 'white' }}
            >
                <p className={classes.title}>{props.title}</p>
                <p className={classes.text}>{props.text}</p>
            </Link>
            <img
                className={classes.trashIcon}
                src={Trash}
                alt="Trash"
                onClick={() => dispatch(deleteDeckById({ deckId: props.id }))}
            />
        </div>
    )
}

export default UserProfileCard
