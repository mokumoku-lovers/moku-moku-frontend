import React from 'react'
import classes from './NavBar.module.css'
import { useState } from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import DefaultAvatar from '../../avatar'

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
                {user?.profile_picture ? (
                    <img
                        src={`https://168.138.215.26:9000/users/pics/${user?.profile_picture}`}
                        alt="Icon"
                        className={classes['user-avatar']}
                        onClick={showProfileHandler}
                    />
                ) : (
                    <DefaultAvatar
                        color="#fff"
                        width="52"
                        height="52"
                        style={{ cursor: 'pointer' }}
                        onClick={showProfileHandler}
                    />
                )}

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
