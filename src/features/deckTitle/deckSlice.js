import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios/axiosInstanceFunction'

const initialState = {
    id: '',
    title: '',
    cards: [],
}

export const createDeck = createAsyncThunk(
    'deck/createDeck',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios('http://168.138.215.26:9002/').post(
                '/deck',
                formData
            )
            return { id: response.data, title: formData.name }
        } catch (err) {
            if (err.response) {
                console.log(err.response.data.message)
                return rejectWithValue(err.response.data.message)
            }
        }
    }
)

// export const getUserDeck = createAsyncThunk(
//     'deck/getUserDeck',
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await axios('http://168.138.215.26:9002/').get(
//                 '/decks/168'
//             )
//             return response.data
//         } catch (err) {
//             if (err.response) {
//                 console.log(err.response.data.message)
//                 return rejectWithValue(err.response.data.message)
//             }
//         }
//     }
// )

export const getDeckById = createAsyncThunk(
    'deck/getDeckById',
    async (deckId, { rejectWithValue }) => {
        try {
            const response = await axios('http://168.138.215.26:9002/').get(
                `/deck/${deckId}`
            )
            console.log('get deck by id', response.data)
            return response.data
        } catch (err) {
            if (err.response) {
                console.log(err.response.data.message)
                return rejectWithValue(err.response.data.message)
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
                state.title = action.payload.name
            })
        // .addCase(getUserDeck.fulfilled, (state, action) => {
        //     state.title = action.payload.title
        //     state.id = action.payload.id
        // })
    },
})

// Action creators are generated for each case reducer function
export const { onSaveTitle } = deckSlice.actions

export default deckSlice.reducer
