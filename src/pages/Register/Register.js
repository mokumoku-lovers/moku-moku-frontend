import React, { useEffect, useState } from 'react'
import classes from './Register.module.css'
import IntroSection from '../../components/IntroSection/IntroSection'
import RegisterForm from './RegisterForm'
import { Link } from 'react-router-dom'
import Alert from '../../components/UI/Alert/Alert'
import { useSelector } from 'react-redux'

const Register = () => {
    const user = useSelector((state) => state.user)
    const [showAlert, setShowAlert] = useState(false)

    const onDimissHanlder = () => {
        setShowAlert(false)
    }

    useEffect(() => {
        if (user.isLogin || user.error) {
            setShowAlert(true)
        }
    }, [user])

    return (
        <div className={classes.container}>
            <IntroSection />
            <section className={classes.split}>
                {user.error && showAlert && (
                    <Alert
                        className={classes.alert__message}
                        alert_type="danger"
                        icon="times"
                        onDimiss={onDimissHanlder}>
                        {user.error}
                    </Alert>
                )}
                {user.isLogin && !user.error && showAlert && (
                    <Alert
                        className={classes.alert__message}
                        alert_type="info"
                        icon="times"
                        onDimiss={onDimissHanlder}>
                        Register Successfully!
                    </Alert>
                )}
                <div className={classes.content}>
                    <p className={classes.title}>Hello!</p>
                    <p className={classes.subtitle}>Sign Up to Get Started</p>
                    <RegisterForm />
                    <p className={classes.subtitle}>
                        Already a member?{'  '}
                        <Link to="/login">
                            <span className={classes.link}>Login Here</span>
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Register
