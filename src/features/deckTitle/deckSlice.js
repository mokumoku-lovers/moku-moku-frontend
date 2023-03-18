import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { checkToken } from '../../app/checkToken'
import axios from '../../axios/axiosInstanceFunction'

const initialState = {
    id: '',
    title: '',
    decks: [],
    cards: [],
    cardDetails: [],
}

export const createDeck = createAsyncThunk(
    'deck/createDeck',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios('https://mokumoku.zsh.jp:9002/').post(
                '/deck',
                formData
            )
            return { id: response.data, title: formData.name }
        } catch (err) {
            if (err.response) {
                checkToken(err.response.data)
                console.log(err.response.data.message)
                return rejectWithValue(err.response.data.message)
            }
        }
    }
)

export const getUserDeck = createAsyncThunk(
    'deck/getUserDeck',
    async (_, { getState, rejectWithValue }) => {
        try {
            const stateValues = getState()
            const { user_id } = stateValues.auth.loginData
            const response = await axios('https://mokumoku.zsh.jp:9002/').get(
                `/decks/${user_id}`
            )
            return response.data
        } catch (err) {
            if (err.response) {
                console.log(err.response.data.message)
                return rejectWithValue(err.response.data.message)
            }
        }
    }
)

export const getDeckById = createAsyncThunk(
    'deck/getDeckById',
    async (deckId, { rejectWithValue }) => {
        try {
            const response = await axios('https://mokumoku.zsh.jp:9002/').get(
                `/deck/${deckId}`
            )

            if (response.data.cards) {
                const fetchCardsResponse = await Promise.all(
                    response.data.cards.map((cardId) =>
                        axios('https://mokumoku.zsh.jp:9002/').get(
                            `card/${cardId}`
                        )
                    )
                )
                const cards = fetchCardsResponse.map((res) => res.data)
                response.data.cardDetails = [...cards]
            }
            return response.data
        } catch (err) {
            if (err.response) {
                checkToken(err.response.data)
                console.log(err.response.data.message)
                return rejectWithValue(err.response.data.message)
            }
        }
    }
)

export const updateDeckById = createAsyncThunk(
    'deck/updateDeckById',
    async ({ deckId, formData }, { rejectWithValue }) => {
        try {
            await axios('https://mokumoku.zsh.jp:9002/').patch(
                `/deck/${deckId}`,
                formData
            )
            return { title: formData.name }
        } catch (err) {
            if (err.response) {
                checkToken(err.response.data)
                console.log(err.response.data.message)
                return rejectWithValue(err.response.data.message)
            }
        }
    }
)

export const deleteDeckById = createAsyncThunk(
    'deck/deleteDeckById',
    async ({ deckId }) => {
        try {
            await axios('https://mokumoku.zsh.jp:9002/').delete(`/deck/${deckId}`)
            return { deckId }
        } catch (err) {
            if (err.response) {
                console.log(err.response)
            }
        }
    }
)

export const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        onSaveTitle: (state, action) => {
            state.title = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createDeck.fulfilled, (state, action) => {
                state.title = action.payload.title
                state.id = action.payload.id
            })
            .addCase(getDeckById.fulfilled, (state, action) => {
                state.id = action.payload.id
                state.cards = action.payload.cards
                state.cardDetails = action.payload.cardDetails
                state.title = action.payload.name
            })
            .addCase(updateDeckById.fulfilled, (state, action) => {
                state.title = action.payload.title
            })
            .addCase(deleteDeckById.fulfilled, (state, action) => {
                state.decks = state.decks.filter(
                    (deck) => deck.id !== action.payload.deckId
                )
            })
            .addCase(getUserDeck.fulfilled, (state, action) => {
                state.decks = action.payload
            })
    },
})

// Action creators are generated for each case reducer function
export const { onSaveTitle } = deckSlice.actions

export default deckSlice.reducer
