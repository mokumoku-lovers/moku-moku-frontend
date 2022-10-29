import React, { useState } from 'react'
import classes from './ProfileEditingPage.module.css'
import GeneralInfoForm from './GeneralInfoForm/GeneralInfoForm'
import NavBar from '../../components/NavBar/NavBar'
import Sidebar from './Sidebar/Sidebar'
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm'
import { Avatar } from '../../components/UI/Avatar/Avatar'
import { useSelector } from 'react-redux'
import Icon from '../../icon.svg'
import RemoveIcon from '../../assets/images/trash.svg'

const ProfileEditingPage = (props) => {
    const [selectedImage, setSelectedImage] = useState(null)

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
        setSelectedImage(e.target.files[0])
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
                            <Avatar src={Icon} />
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
                                                onClick={() =>
                                                    setSelectedImage(null)
                                                }
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
                        <GeneralInfoForm selectedImage={selectedImage} />
                    ) : (
                        <ChangePasswordForm />
                    )}
                </div>
            </section>
        </>
    )
}

export default ProfileEditingPage
