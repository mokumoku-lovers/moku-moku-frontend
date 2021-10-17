import React from 'react' 
import classes from './CardButtons.module.css'

const buttonCongfig = {
    front: [
        {name: "Previous"}, 
        {name: "Show Answer"},
        {name: "Edit"}
    ],
    back: [ 
        {name: "Previous", time: ""},
        {name: "Again", time: "<1m"}, 
        {name: "Hard", time: "1d"}, 
        {name: "Good", time: "4d"},
        {name: "Easy", time: "10d"},
        {name: "Edit", time: ""}
    ] 
}

const MakeButtons = (side) => {
    return(
    buttonCongfig[side].map((buttonItem)=>(
            <>  
                <div className={buttonItem.name}>
                    <h1 className={classes.buttonHeading}>{buttonItem.time}</h1>
                    <button className={classes.button}>{buttonItem.name}</button>
                </div>
            </>
        ))
    )  
}


const CardButtons = (props) => {

    return(
        <div className={classes.position}>
            <div className={classes.buttonGroup}>{MakeButtons(props.side)}</div> 
        </div>
    ); 
}

export default CardButtons