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

export const createuser = createAsyncThunk(
    "createuser",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.post("http://localhost:3000/users",data)
            const resp = await res.data
            return resp;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteuser=createAsyncThunk(
    "deleteuser",async(id,{rejectWithValue})=>{
        try {
            const res = await axios.delete(`http://localhost:3000/users/${id}`)
            const resp = await res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateuser =createAsyncThunk(
    "Editdata",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.put(`http://localhost:3000/users/${data.id}`,data)
            const resp = await res.data
            return resp
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

        // create
         .addCase(createuser.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(createuser.fulfilled,(state,action)=>{
            state.loading = false;
           state.users.push(action.payload)
        })
        .addCase(createuser.rejected,(state,action)=>{
            state.loading = false ;
            state.error = action.payload
        })
        // delete
          .addCase(deleteuser.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(deleteuser.fulfilled,(state,action)=>{
            state.loading = false;

            state.users = state.users.filter((data,index)=> data.id !== action.payload)

        })
        .addCase(deleteuser.rejected,(state,action)=>{
            state.loading = false ;
            state.error = action.payload
        })
        // edit

          .addCase(updateuser.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(updateuser.fulfilled,(state,action)=>{
            state.loading = false;
           
            state.users = state.users.map((ele)=>{
                ele.id = action.payload.id ? action.payload : ele
            })

        })
        .addCase(updateuser.rejected,(state,action)=>{
            state.loading = false ;
            state.error = action.payload
        })
    }
})

export const {userPeding,userFullfield,userrejected} = userSlice.actions;

export default userSlice.reducer;