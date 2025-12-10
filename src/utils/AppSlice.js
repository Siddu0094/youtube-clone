import { createSlice } from "@reduxjs/toolkit";


const AppSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toogleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})


export const {toogleMenu}=AppSlice.actions
export default AppSlice.reducer