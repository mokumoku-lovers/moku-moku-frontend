import React from 'react'
import classes from './Register.module.css'
import IntroSection from '../Intro/IntroSection'
import RegisterForm from './RegisterForm'

const Register = () => {
    return (
        <div className={classes.container}>
            <IntroSection />
            <section className={classes.split}>
                <div className={classes.content}>
                    <p className={classes.title}>Hello!</p>
                    <p className={classes.subtitle}>Sign Up to Get Started</p>
                    <RegisterForm />
                    <p className={classes.subtitle}>
                        Already a member?{'  '}
                        <span className={classes.link}>Login Here</span>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Register
