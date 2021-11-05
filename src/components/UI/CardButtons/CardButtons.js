import React from 'react' 
import classes from './CardButtons.module.css'

const buttonConfig = {
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

const CardButtons = ({cardState, parentCallback}) => {
    const handleClick = e =>{
        const name= e.currentTarget.value
        if (name =="Show Answer"){
            parentCallback()
        }
    }

    const MakeButtons = (side) => {    
        return(
            buttonConfig[side].map((buttonItem)=>(
                <div key={buttonItem.name} className={buttonItem.name}>
                    
                    <h1 className={classes.buttonHeading}>
                        {buttonItem.time}
                    </h1>
                    
                    <button 
                        className={classes.button}
                        value={buttonItem.name}
                        onClick={handleClick}
                    >
                        {buttonItem.name}
                    </button>

                </div>
            ))
        )  
    }

    return(
            <div className={classes.buttonGroup}>
                {cardState? MakeButtons("back"): MakeButtons("front")}
            </div> 
    ); 
}

export default CardButtons