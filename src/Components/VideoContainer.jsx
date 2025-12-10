import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { AdRedborderVideoCard } from './VideoCard'


const Ennhanced=AdRedborderVideoCard(VideoCard)
const VideoContainer = () => {
  
    const[videos,setvideos]=useState([])
  
    useEffect(()=>{
   getvideos()
    },[])
  const getvideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API)
    const res=await data.json()
    // console.log(res.items)
    setvideos(res.items)
  }
  
    return (
    <div className='flex flex-wrap'>
       <Ennhanced info={videos[0]}/>
        {videos.map((video)=>{
            return(
                <Link key={video.id} to={"/watch?v="+video.id}>
                <VideoCard  info={video}/>  
                
                </Link>
            )
        })}
    </div>
  )
}

export default VideoContainer
