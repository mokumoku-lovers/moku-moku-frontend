import React, { useEffect } from 'react'
import UserCardSection from './UserCardSection/UserCardSection'
import UserInfoSection from './UserInfoSection/UserInfoSection'
import classes from './UserProfile.module.css'
import NavBar from '../../components/NavBar/NavBar'
import UserInfoLoading from './UserInfoSection/UserInfoLoadingSection'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../../features/user/userSlice'

const UserProfile = () => {
    const user = useSelector((store) => store.user)
    const { user_id } = useSelector((store) => store.auth.loginData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser(user_id))
        console.log('user_id', user_id)
    }, [user_id, dispatch])

    console.log(user)

    const { isLoading } = user
    return (
        <>
            <NavBar />
            <div className={classes.container}>
                <UserCardSection />
                <div className={classes.user_profile__section}>
                    {isLoading || !user.user ? (
                        <UserInfoLoading />
                    ) : (
                        <UserInfoSection />
                    )}
                </div>
            </div>
        </>
    )
}

export default UserProfile
