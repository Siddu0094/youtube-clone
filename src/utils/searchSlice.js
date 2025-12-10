import { createSlice } from "@reduxjs/toolkit";


const searchSlice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
        //  {"ip":["ipone","iphone11"]}   
            // state={...action.payload,...state}  //it does not work 
           // state=Object.assign(state,action.payload) //it will work
           return {...state,...action.payload}
        }
    }
})

export const {cacheResults}=searchSlice.actions
export default searchSlice.reducer