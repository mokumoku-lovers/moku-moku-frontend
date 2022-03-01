import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import IntroSection from '../../components/IntroSection/IntroSection'
import classes from './Login.module.css'
import LoginForm from './LoginForm'
import { useSelector } from 'react-redux'
import Alert from '../../components/UI/Alert/Alert'
import { useState } from 'react'
import { useEffect } from 'react'

const Login = () => {
    const { error, loginData } = useSelector((state) => state.auth)

    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        if (error || loginData) setShowAlert(true)
    }, [error, loginData, setShowAlert])

    if (loginData) {
        return <Redirect to="/profile/" />
    }

    const onDismissHandler = () => {
        alert = null
        setShowAlert(false)
    }

    let alert
    if (error) {
        alert = (
            <Alert
                className={classes.alert__message}
                alert_type="danger"
                icon="times"
                onDimiss={onDismissHandler}
            >
                {error.message}
            </Alert>
        )
    }

    return (
        <div className={classes.container}>
            <IntroSection />
            <section className={classes.split}>
                <div className={classes.content}>
                    {showAlert && alert}
                    <p className={classes.title}>Hello Again!</p>
                    <p className={classes.subtitle}>Welcome Back</p>
                    <LoginForm />
                    <p className={classes.subtitle}>
                        Not a member?{' '}
                        <Link to="/register">
                            <span className={classes.link}>Sign Up Here</span>
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Login
