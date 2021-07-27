import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchUsers } from "./exam.utils"


// ** initialState
const initialState = {
    data: [],
    status: 'idle'
}

// ** async actions use thunk
export const getAllPersons = createAsyncThunk(
    'exam/getAllPersons',
    async (amount, { dispatch, getState }) => {
        const data = await fetchUsers(amount)
        console.log(getState())
        dispatch(addPerson())
        return data
    }
)


export const examSlice = createSlice({
    name: 'exam',
    initialState,

    // ** reducers
    reducers: {
        addPerson: (state) => {
            state.data = [...state.data, { name: 'hamidreza', age: '23' }]
        },
        removePerson: (state) => {
            state.data = []
        },
        addAnotherPerson: (state) => {
            state.data = [...state.data, { name: 'abolfazl', age: '23' }]
        },
        removeSpecific: (state, { payload }) => {
            state.data = state.data.filter(item => item.name !== payload)
        }
    },

    // ** for extra actions created by createAsyncThunk
    extraReducers: (builder) => {
        builder
            .addCase(getAllPersons.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAllPersons.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(getAllPersons.fulfilled, (state, { payload }) => {
                state.status = 'idle'
                state.data = [...state.data, ...payload]
            })
    }
})










// ** export actions
export const { addPerson, removePerson, addAnotherPerson, removeSpecific } = examSlice.actions


// ** export reducer
export default examSlice.reducer