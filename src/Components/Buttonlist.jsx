import React from 'react'
import Button from './Button'

const Buttonlist = () => {
  const list = ["All", "Live", "soccer", "news", "music", "cricket", "React", "javascript"]

  return (
    <div className="flex overflow-x-scroll no-scrollbar py-3">
      {list.map((item, index) => (
        <Button name={item} key={index} />
      ))}
    </div>
  )
}

export default Buttonlist
