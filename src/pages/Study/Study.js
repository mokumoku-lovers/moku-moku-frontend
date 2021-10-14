import React from "react";
import StudyCard from "../../components/StudyCard/StudyCard";
import classes from "./Study.module.css";

const Study = () => {
    return (
        <section>
            <div className={classes.container}>
                <StudyCard/>
            </div>
            {/* Buttons */}
        </section>
    )
}

export default Study;