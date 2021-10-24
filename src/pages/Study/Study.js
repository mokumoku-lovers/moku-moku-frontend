import React from "react";
import StudyCard from "../../components/StudyCard/StudyCard";
import CardButtons from "../../components/UI/CardButtons/CardButtons";
import classes from "./Study.module.css";

const Study = () => {
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