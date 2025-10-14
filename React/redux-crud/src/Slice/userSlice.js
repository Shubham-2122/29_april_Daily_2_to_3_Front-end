import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const readuser = createAsyncThunk(
    "readuser",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/users")
            const resp = await res.data;
            return resp;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const userSlice = createSlice({
    name:"user",
    initialState:{
        loading : true,
        users : [],
        error : ""
    },
    reducers:{
        userPeding:(state,action)=>{
            state.loading = true;
        },
        userFullfield:(state,action)=>{
            state.loading = false;
            state.users.push(action.payload);
        },
        userrejected:(state,action)=>{
            state.loading = false;
            state.error = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        // read
        .addCase(readuser.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(readuser.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload
        })
        .addCase(readuser.rejected,(state,action)=>{
            state.loading = false ;
            state.error = action.payload
        })
    }
})

export const {userPeding,userFullfield,userrejected} = userSlice.actions;

export default userSlice.reducer;