import React from 'react'
import { useSelector } from 'react-redux'
import classes from './Notification.module.css'

const Notification = () => {
    const { notiList } = useSelector((store) => store.noti)

    return (
        <div className={classes.container}>
            {notiList.map((noti) => (
                <div className={`${classes.noti} ${classes[noti.type]}`}>{noti.message}</div>
            ))}
        </div>
    )
}

export default Notification
