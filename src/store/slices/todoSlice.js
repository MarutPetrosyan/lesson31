import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        text: '',
        todos: []
    },
    reducers: {
        changeText(state, action) {
            state.text = action.payload
        },
        add(state) {
            state.todos = [...state.todos, { id: Date.now(), title: state.text, isDone : false }]
        },
        del(state,action){
            state.todos = state.todos.filter((el)=>el.id !== action.payload)
        },
        changeInput(state,action){
            state.todos = state.todos.filter((el)=>el.id !== action.id)
        }

    }
})

export const { changeText, add, del, changeInput } = todoSlice.actions
export default todoSlice.reducer