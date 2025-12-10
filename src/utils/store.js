import { configureStore } from "@reduxjs/toolkit";
import AppReducer from './AppSlice'
import searchReducer from './searchSlice'
const store=configureStore({
    reducer:{ 
        app:AppReducer,
        search:searchReducer

    }
})


export default store