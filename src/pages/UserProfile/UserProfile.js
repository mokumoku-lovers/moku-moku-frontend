import React, { useEffect } from 'react'
import UserCardSection from './UserCardSection/UserCardSection'
import UserInfoSection from './UserInfoSection/UserInfoSection'
import classes from './UserProfile.module.css'
import NavBar from '../../components/NavBar/NavBar'
import UserInfoLoading from './UserInfoSection/UserInfoLoadingSection'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileImage, getUser } from '../../features/user/userSlice'

const UserProfile = () => {
    const user = useSelector((store) => store.user)
    const { user_id } = useSelector((store) => store.auth.loginData)
    const dispatch = useDispatch()

    useEffect(() => {
        const getUserData = async () => {
            const res = await dispatch(getUser(user_id))
            const profileHash = res?.payload?.profile_picture
            if (profileHash) {
                dispatch(getProfileImage(profileHash))
            }
        }

        getUserData()
    }, [user_id, dispatch])

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
