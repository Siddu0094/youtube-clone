import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    if(!info) return null
   const {snippet,statistics}=info;
   const{channelTitle,title,thumbnails}=snippet
    return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      
      <img className='rounded-lg ' src={thumbnails.medium.url} alt="video" />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard


export const AdRedborderVideoCard=(Component)=>{
  
    const enhanced=({info})=>{
        return (
            <div className='border border-red-500 p-1  m-1'>
                <Component info={info} />
            </div>
        )
    }
    return enhanced
    
}
