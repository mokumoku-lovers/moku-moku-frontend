import React from 'react'
import classes from './NavBar.module.css'
import { useState } from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'

const AuthNav = () => {
    const [showProfile, setShowProfile] = useState(false)
    const { user } = useSelector((store) => store.user)

    const closeProfileHandler = useCallback((e) => {
        if (!e.target.closest('#avatar')) {
            setShowProfile(false)
            document.removeEventListener('click', closeProfileHandler)
        }
    }, [])

    useEffect(() => {
        return () => document.removeEventListener('click', closeProfileHandler)
    }, [closeProfileHandler])

    const showProfileHandler = (e) => {
        setShowProfile(true)
        e.stopPropagation()
        document.addEventListener('click', closeProfileHandler)
    }

    return (
        <ul className={classes['nav-menu']}>
            <div id="avatar" className={classes.avatar_container}>
                <img
                    src={
                        user?.profile_picture
                            ? `http://168.138.215.26:9000/users/pics/${user?.profile_picture}`
                            : '/images/user.png'
                    }
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
