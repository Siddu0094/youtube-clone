import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex overflow-x-scroll no-scrollbar'>
      <button className='px-5 py-2  m-2 bg-gray-300 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
