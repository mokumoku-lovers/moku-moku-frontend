import React from 'react'
import classes from './CreateDeckForm.module.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import ButtonSecondary from '../../components/UI/Button/ButtonSecondary'
import Model from '../../components/UI/Model/Model'

const CreateDeckForm = (props) => {
    return (
        <Model>
            <form className={classes.form}>
                <h1>Create Your Deck</h1>

                <div className={classes.formControl}>
                    <label htmlFor="title">
                        Deck Title <span style={{ color: 'red' }}>*</span>
                    </label>
                    <Input placeholder="Enter your deck title" />
                </div>

                <div className={classes.buttons}>
                    <ButtonSecondary>Cancel</ButtonSecondary>
                    <Button>Save</Button>
                </div>
            </form>
        </Model>
    )
}

export default CreateDeckForm
