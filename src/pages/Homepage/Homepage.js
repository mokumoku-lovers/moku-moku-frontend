import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './Homepage.module.css'
import illustration from './studying.svg'

const Homepage = () => {
    return (
        <>
            <NavBar isLoggedIn={false} />
            <section>
                <div>
                    <h1>Hello! We're</h1>
                    <h1>Moku Moku</h1>
                    <h1>Learn it. Remember it.</h1>
                    <button>Get Started</button>
                </div>
                <div>
                    <img src={illustration} alt="" />
                </div>
            </section>
        </>
    )
}

export default Homepage
