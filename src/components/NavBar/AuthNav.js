import React from 'react'
import classes from './NavBar.module.css'
import icon from '../../icon.svg'
import { useState } from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'

const AuthNav = () => {
    const [showProfile, setShowProfile] = useState(false)

    return (
        <ul className={classes['nav-menu']}>
            <div className={classes['input-control']}>
                <input type="text" className={classes.searchbar} />
                <i className={`fas fa-search ${classes['search-icon']}`}></i>
            </div>
            <div className={classes.avatar_container}>
                <img
                    src={icon}
                    alt="Icon"
                    className={classes['user-avatar']}
                    onClick={() => setShowProfile(!showProfile)}
                />
            </div>
        </ul>
    )
}

export default AuthNav
