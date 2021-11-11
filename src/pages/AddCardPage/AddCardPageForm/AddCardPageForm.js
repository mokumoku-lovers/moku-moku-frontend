import React from 'react'
import TextArea from '../../../components/UI/TextArea/TextArea'
import Button from '../../../components/UI/Button/Button'
import ButtonSecondary from '../../../components/UI/Button/ButtonSecondary'

const AddCardPageForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="card-front">
                    Card Front <span style={{ color: 'red' }}>*</span>
                </label>
                <TextArea
                    id="card-front"
                    name="card-front"
                    rows={4}
                    placeholder="Write anything for front side of the card"
                    required
                />
                <label htmlFor="card-back">
                    Card Back <span style={{ color: 'red' }}>*</span>
                </label>
                <TextArea
                    id="card-back"
                    name="card-back"
                    rows={4}
                    placeholder="Write anything for back side of the card "
                    required
                />
                <div>
                    <ButtonSecondary>Cancel</ButtonSecondary>
                    <Button>Save</Button>
                </div>
            </form>
        </div>
    )
}

export default AddCardPageForm
