import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo : ["shubham","sujal"]
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo : (state,action)=>{
           state.todo.push(action.payload)
        },
        DeleteTodo : (state,action)=>{
            state.todo = state.todo.filter((data,index) => index !== action.payload)
        },
        Edittodo:(state,action)=>{
            
        }
    }
})

export const {addTodo,DeleteTodo} = todoSlice.actions;

export default todoSlice.reducer;