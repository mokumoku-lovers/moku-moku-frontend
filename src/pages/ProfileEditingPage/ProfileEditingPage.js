import React, { useState } from 'react'
import classes from './ProfileEditingPage.module.css'
import GeneralInfoForm from './GeneralInfoForm/GeneralInfoForm'
import NavBar from '../../components/NavBar/NavBar'
import Sidebar from './Sidebar/Sidebar'
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm'
import { Avatar } from '../../components/UI/Avatar/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import RemoveIcon from '../../assets/images/trash.svg'
import { uploadProfileImage } from '../../features/user/userSlice'

const ProfileEditingPage = (props) => {
    const dispatch = useDispatch()
    const {
        loginData: { user_id },
    } = useSelector((store) => store.auth)

    const { profile_picture } = useSelector((store) => store.user.user)

    const [selectedImage, setSelectedImage] = useState(null)
    const [selectImageUrl, setSelectImageUrl] = useState(null)

    const [isEditProfile, setIsEditProfile] = useState(
        props.isEditProfile || true
    )

    const onClickEditProfile = () => {
        setIsEditProfile(true)
    }

    const onClickChangePassword = () => {
        setIsEditProfile(false)
    }

    const handleSelectProfileImage = (e) => {
        const img = e.target.files[0] || null
        if (!img) return

        setSelectedImage(e.target.files[0])
        setSelectImageUrl(URL.createObjectURL(img))

        const formData = new FormData()
        formData.append('file', img, img.name)

        dispatch(
            uploadProfileImage({
                id: user_id,
                formData,
            })
        )
    }

    const { display_name } = useSelector((store) => store.user.user)

    return (
        <>
            <NavBar />
            <section className={classes.container}>
                <Sidebar
                    isEditProfile={isEditProfile}
                    onClickEditProfile={onClickEditProfile}
                    onClickChangePassword={onClickChangePassword}
                />
                <div className={classes.separator} />
                <div className={classes.formSection}>
                    <div className={classes.userInfo}>
                        <div className={classes.userAvatar}>
                            <Avatar
                                src={
                                    selectImageUrl
                                        ? selectImageUrl
                                        : profile_picture
                                        ? `http://168.138.215.26:9000/users/pics/${profile_picture}`
                                        : '/images/user.png'
                                }
                            />
                        </div>
                        <div className={classes.username}>
                            <h3>
                                {display_name ? display_name : 'Display Name'}
                            </h3>
                            {isEditProfile && (
                                <div>
                                    <label
                                        className={classes.changeProfileLabel}
                                        htmlFor="profilePhoto"
                                    >
                                        {selectedImage
                                            ? 'Select other image'
                                            : 'Change profile photo'}
                                    </label>
                                    <input
                                        onChange={handleSelectProfileImage}
                                        style={{ display: 'none' }}
                                        type="file"
                                        id="profilePhoto"
                                        name="profilePhoto"
                                    />
                                    {selectedImage && (
                                        <div
                                            className={
                                                classes.selectedImageContainer
                                            }
                                        >
                                            <p
                                                className={
                                                    classes.selectedImageName
                                                }
                                            >
                                                {selectedImage.name}
                                            </p>
                                            <img
                                                onClick={() => {
                                                    setSelectedImage(null)
                                                    setSelectImageUrl(null)
                                                }}
                                                className={classes.removeIcon}
                                                src={RemoveIcon}
                                                alt="remove"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    {isEditProfile ? (
                        <GeneralInfoForm />
                    ) : (
                        <ChangePasswordForm />
                    )}
                </div>
            </section>
        </>
    )
}

export default ProfileEditingPage
