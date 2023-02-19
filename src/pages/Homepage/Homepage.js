import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './Homepage.module.css'
import wave1 from './wave1.svg'
import wave2 from './wave2.svg'
import card from './cardImages/card.png'
import cardWithAnswer from './cardImages/cardWithAnswer.png'
import cardWithImage from './cardImages/cardWithImage.png'
import leaderboard from './cardImages/leaderboard.png'
import CardImg from './Cards.png'
import Footer from '../../components/Footer/Footer'
import { useHistory } from 'react-router-dom'

const Homepage = () => {
    const history = useHistory()

    return (
        <>
            <NavBar isLoggedIn={false} />
            <main className={classes.main}>
                <section className={classes.heroSection}>
                    <div className={classes.content}>
                        <div className={classes.leftContent}>
                            <h1>CREATE IT. </h1>
                            <h1>REMEMBER IT</h1>
                            <h3>Master any subject, one success at a time</h3>
                            <button onClick={() => history.push('/login')}>
                                Get Started
                            </button>
                        </div>
                        <div className={classes.rightContent}>
                            <img
                                className={classes.cardImg}
                                src={CardImg}
                                alt="cards"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <img src={wave1} className={classes.wave1} alt="wave 1" />
                    <div className={classes.features}>
                        <h1 className={classes.featureTitle}>
                            There is always one more card to learn{' '}
                        </h1>
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
                    </div>
                    <img className={classes.wave2} src={wave2} alt="" />
                </section>

                <section className={classes.leaderboard}>
                    <div className={classes.leaderboard__container}>
                        <h1>See you at our leaderboard.</h1>
                        <img src={leaderboard} alt="Leaderboard" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Homepage
