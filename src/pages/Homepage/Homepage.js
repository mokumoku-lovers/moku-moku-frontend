import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './Homepage.module.css'
import illustration from './studying.svg'

const Homepage = () => {
    return (
        <>
            <NavBar isLoggedIn={false} />
            <section className={classes.container}>
                <div className={classes.content}>
                    <p className={classes.subtitle}>Hello! We're</p>
                    <p className={classes.title}>Moku Moku</p>
                    <p className={classes.subtitle}>Learn it. Remember it.</p>
                    <button className={classes.button}>Get Started</button>
                </div>
                <div className={classes.image__section}>
                    <img src={illustration} alt="" />
                </div>
            </section>
        </>
    )
}

export default Homepage
