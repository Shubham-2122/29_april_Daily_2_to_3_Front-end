import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "../feacture/counter/counterSlice";

export default configureStore({
    reducer:{
        counter : counterSlice
    }
})