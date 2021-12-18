import Button from '../../components/UI/Button/Button'
import classes from './EditCardPageHeader.module.css'

const EditCardPageHeader = (props) => {
    return (
        <div className={classes.container}>
            <div>
                <div>
                    <p className={classes.deck__title}>Japanese</p>
                </div>
                <p className={classes.card__count}>0 card</p>
            </div>
            <div className={classes.card__buttons}>
                <Button onClick={clickAddCardButton}>Add Card</Button>
                <Button onClick={clickStudyButton}>Study</Button>
            </div>
        </div>
    )
}

export default EditCardPageHeader
