import React from 'react'
import classes from './Register.module.css'
import IntroSection from '../../components/IntroSection/IntroSection'
import RegisterForm from './RegisterForm'
import { Link } from 'react-router-dom'

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
