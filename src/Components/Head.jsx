import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex  col-span-1'>
       <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png" alt="menu"  className='h-8'/>
        <img className='h-8 mx-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="logo" />
      </div>
      {/* search box */}
      <div className='col-span-10  px-10'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" placeholder='search' />
        <button className='border border-gray-400 bg-gray-100 text-black px-5 py-2 rounded-r-full'>Search</button>
      </div>
      {/* usericon */}
      <div className='col-span-1'>
        <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
      </div>
    </div>
  )
}

export default Head
