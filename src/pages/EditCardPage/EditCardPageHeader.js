import Button from '../../components/UI/Button/Button'
import classes from './EditCardPageHeader.module.css'

const EditCardPageHeader = (props) => {
    const [editing, setEditing] = useState(false)
    return (
        <div className={classes.container}>
            <div>
                <div>
                    {editing ? (
                        <i
                            className={`far fa-save ${classes.icon} ${classes.iconSave}`}
                            onClick={onClickTitleSaveHandler}
                        ></i>
                    ) : (
                        <i
                            onClick={onClickTitleEditHandler}
                            className={`fas fa-edit ${classes.icon} ${classes.iconEdit}`}
                        ></i>
                    )}
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
