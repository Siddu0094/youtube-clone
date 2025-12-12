import React, { useRef } from 'react'
import Chatmessage from './Chatmessage'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addmessage } from '../utils/ChatSlice'
import { generaterandommessages, generaterandomname } from '../utils/helper'
const LiveChat = () => {
const dispatch=useDispatch()
const chatmessages=useSelector((store)=>store.chat.messages)

const chatref=useRef(null)
const [livemessage,setlivemessage]=useState("")


// //auto scroll to bottom when new message occurs
// useEffect(()=>{
//   if(chatref.current){
//     chatref.current.scrollTop=chatref.current.scrollHeight
//   }
// },[chatmessages])

  useEffect(()=>{
    const i=setInterval(()=>{
    console.log("Api pooling")

    dispatch(addmessage({
        name:generaterandomname(),
        message:generaterandommessages(10)
    }))
    },1000)

    return ()=>{
   clearInterval(i)
    }
  },[])




  return (
    <>
    <div ref={chatref} className='m-auto ml-1.5 w-full h-[300px] bg-slate-100 rounded-lg  p-2 border border-black overflow-y-scroll flex flex-col-reverse  '>
     {chatmessages.map((c,index)=>{
        return (
             <Chatmessage key={index} name={c.name} message={c.message}/>
        )
     })}
     
    </div>
    <form onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addmessage({
            name:"Siddu Patil",
            message:livemessage
        }))
        setlivemessage("")
    }}  className='w-full p-2 ml-2'>
        <input type="text" value={livemessage} onChange={(e)=>{
            setlivemessage(e.target.value)
        }} className='border border-black w-96 p-2' placeholder='enter message' />
        <button className='px-2 mx-2 bg-green-200' type='submit'>Send</button>
    </form>
    </>
  )
}

export default LiveChat
