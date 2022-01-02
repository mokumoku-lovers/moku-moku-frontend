import React from 'react'
import classes from './NavBar.module.css'
import icon from '../../icon.svg'
import { useState } from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'

const AuthNav = () => {
    const [showProfile, setShowProfile] = useState(false)

    const showProfileHandler = (e) => {
        setShowProfile(true)
        e.stopPropagation()
        document.addEventListener('click', closeProfileHandler)
    }
    return (
        <ul className={classes['nav-menu']}>
            <div className={classes['input-control']}>
                <input type="text" className={classes.searchbar} />
                <i className={`fas fa-search ${classes['search-icon']}`}></i>
            </div>
            <div id="avatar" className={classes.avatar_container}>
                <img
                    src={icon}
                    alt="Icon"
                    className={classes['user-avatar']}
                    onClick={showProfileHandler}
                />
                {showProfile && (
                    <div className={classes.profile_card}>
                        <ProfileCard />
                    </div>
                )}
            </div>
        </ul>
    )
}

export default AuthNav
