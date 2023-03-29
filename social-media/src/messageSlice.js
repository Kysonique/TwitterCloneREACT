import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//     messages:['Hello User']
// }
export const messageSlice = createSlice({
    name:'userposts',
    initialState: [],
    reducers:{
        addNewPost: (state, action) =>{
            state.messages = [...state.messages, action.payload]
        }
    }
})

export const {addNewPost} = messageSlice.actions
export const {messageReducer} = messageSlice.reducer