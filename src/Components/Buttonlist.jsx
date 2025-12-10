import React from 'react'
import Button from './Button'
const Buttonlist = () => {

    const list=["All","Live","soccer","news","music","cricket","React","javascript"]
  return (
    <div className='flex'>
      {/* button list is a collection of buttons */}
      {list.map((item,index)=>{
        return(
            <Button name={item} key={index} />
        )
      })}
     
       
    </div>
  )
}

export default Buttonlist
