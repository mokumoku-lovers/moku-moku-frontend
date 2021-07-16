import React from 'react'
import IntroSection from '../Intro/IntroSection'
import classes from './Login.module.css'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <div className={classes.container}>
            <IntroSection />
            <section className={classes.split}>
                <div className={classes.content}>
                    <p className={classes.title}>Hello Again!</p>
                    <p className={classes.subtitle}>Welcome Back</p>
                    <LoginForm />
                </div>
            </section>
        </div>
    )
}

export default Login
