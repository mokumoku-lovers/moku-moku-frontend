import React from 'react'

const CardItems = () => {
    const dummy_card = [
        {
            id: 1,
            front: '1+1',
            back: '2',
        },
        {
            id: 2,
            front: 'Apple',
            back: 'ringo',
        },
        {
            id: 3,
            front: 'something asdf sadf ',
            back: 'wersaf asdf ',
        },
        {
            id: 4,
            front: 'qwr asf wqr ',
            back: 'asfd qr saf ',
        },
        {
            id: 5,
            front: '1+1',
            back: 'wqers asf asf wqers asf asf wqers asf asf wqers asf asfwqers asf asf wqers asf asfwqers asf asf wqers asf asf f asf wqers asf asfwqers asf asf wqers asf asff asf wqers asf asfwqers asf asf wqers asf asff asf wqers asf asfwqers asf asf wqers asf asff asf wqers asf asfwqers asf asf wqers asf asf ',
        },
        {
            id: 6,
            front: 'wqers asf asf wqers asf asf wqers asf asf wqers asf asfwqers asf asf wqers asf asfwqers asf asf wqers asf asf f asf wqers asf asfwqers asf asf wqers asf asff asf wqers asf asfwqers asf asf wqers asf asff asf wqers asf asfwqers asf asf wqers asf asff asf wqers asf asfwqers asf asf wqers asf asf ',
            back: 'rwerwesf asf qwr saf ',
        },
        {
            id: 7,
            front: 'wqers asf safwqr qwer  ',
            back: 'rwerwesf asf qwr saf ',
        },
    ]
    const cards = dummy_card.map((card) => (
        <React.Fragment key={card.id}>
            <p>{card.id}</p>
            <div>
                <p className={classes.grid__text}>{card.front}</p>
            </div>
            <div>
                <p className={classes.grid__text}>{card.back}</p>
            </div>
            <div>
                <Button onClick={() => onClickEditHandler(card.id)}>
                    Edit
                </Button>
            </div>
        </React.Fragment>
    ))

    return (
        <div className={classes.container}>
            <p></p>
            <h1>Card Front</h1>
            <h1>Card Back</h1>
            <p></p>
            {cards}
        </div>
    )
}

export default CardItems
