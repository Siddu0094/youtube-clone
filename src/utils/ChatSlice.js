import { createSlice } from "@reduxjs/toolkit";
import { live_chat_count } from "./constants";




const ChatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addmessage:(state,action)=>{
                state.messages.splice(live_chat_count,1)
                state.messages.unshift(action.payload)
        }
    }
})

export const {addmessage}=ChatSlice.actions

export default ChatSlice.reducer
