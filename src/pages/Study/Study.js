import React, {useState} from "react"

const Study = () => {
    //  Card front side: false
    //  Card back side: true
    const [cardState, flipCard] = useState(false)

    return (
        <section id="study">
            <div className={classes.container}>
                <StudyCard/>
            </div>
            <CardButtons side="front"/>
        </section>
    )
}

export default Study;