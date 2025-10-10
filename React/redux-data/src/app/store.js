import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "../feacture/counter/counterSlice";
import todoSlice  from "../feacture/Todo/todoSlice";

export default configureStore({
    reducer:{
        counter : counterSlice,
        todos : todoSlice
    }
})