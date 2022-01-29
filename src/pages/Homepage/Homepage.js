import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './Homepage.module.css'
import girl from './girl.png'
import wave2 from './wave2.svg'
import card from './cardImages/card.png'
import cardWithAnswer from './cardImages/cardWithAnswer.png'
import cardWithImage from './cardImages/cardWithImage.png'
import leaderboard from './cardImages/leaderboard.png'

const Homepage = () => {
    return (
        <>
            <NavBar isLoggedIn={false} />
            <main className={classes.main}>
                <section className={classes.heroSection}>
                    <div className={classes.content}>
                        <h1>CREATE IT. REMEMBER IT</h1>
                        <h3>Master any subject, one success at a time</h3>
                        <button>Get Started</button>
                    </div>

                    <div className={classes.image}>
                        <img src={girl} alt="hero" />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Homepage
