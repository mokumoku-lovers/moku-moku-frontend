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

                <section className={classes.features}>
                    <div className={classes.feature}>
                        <div className={classes.feature__img}>
                            <img src={card} alt="" />
                        </div>
                        <div className={classes.feature__content}>
                            <h1>Create your card.</h1>
                            <p>Master any subject, one success at a time</p>
                        </div>
                    </div>

                    <div className={classes.feature}>
                        <div className={classes.feature__content}>
                            <h1>Answer your card.</h1>
                            <p>Master any subject, one success at a time</p>
                        </div>
                        <div className={classes.feature__img}>
                            <img
                                style={{
                                    display: 'inherit',
                                    marginLeft: 'auto',
                                }}
                                src={cardWithAnswer}
                                alt=""
                            />
                        </div>
                    </div>

                    <div
                        className={classes.feature}
                        style={{ marginBottom: 0 }}
                    >
                        <div className={classes.feature__img}>
                            <img src={cardWithImage} alt="" />
                        </div>
                        <div className={classes.feature__content}>
                            <h1>With images is fine.</h1>
                            <p>Master any subject, one success at a time</p>
                        </div>
                    </div>
                </section>
                <img className={classes.wave2} src={wave2} alt="" />

                <section className={classes.leaderboard}>
                    <div className={classes.leaderboard__container}>
                        <h1>See you at our leaderboard.</h1>
                        <img src={leaderboard} alt="Leaderboard" />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Homepage
