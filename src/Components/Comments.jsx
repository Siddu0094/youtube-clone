  import React from 'react'
  // commetn data-> array of object -> array of comments
  //each comment can have reply
  //repliees is array of objects again

  const commentData=[
    {
      name:"Akshay saini",
      text:"nice video",
      replies:[
        {
          name:"Siddu patil",
          text:"nice content",
          replies:[
            {name:"ak",
            text:"little errors",
            }
          ]
        }
      ]
    },
    {
      name:"Akshay saini",
      text:"nice video",
      replies:[
        {
      name:"Akshay saini",
      text:"nice video",
      replies:[
        {
      name:"Akshay saini",
      text:"nice video",
      replies:[
        
      ]
    },
      ]
    },
      ]
    },
    {
      name:"Akshay saini",
      text:"nice video",
      replies:[
        {
      name:"Akshay saini",
      text:"nice video",
      replies:[
        {
      name:"Akshay saini",
      text:"nice video",
      replies:[
        
      ]
    }, 
      ]
    }, 
      ]
    },
  
    
  ]


  const Comment=({data})=>{
    const{name,text}=data
  return (
    <div className='flex shadow-lg bg-gray-100 p-2 rounded-lg'>
      <img className='w-8 h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="userimage" />
      <div className='px-3 '>
        <p className='font-bold'>Name :{name}</p>
        <p>Comment: {text}</p>
      </div>
    </div>
  )
  }

  //comment list
  const CommentsList=({data=[]})=>{
    return(
      <div>
        {data.map((comment,index)=>(
        <div>
          <Comment key={index} data={comment}/>
            <div className='p-l-5 border border-l-black ml-5'>
            {/* <Comment key={index} data={comment}/>
            <Comment key={index} data={comment}/>
            <Comment key={index} data={comment}/>
             */}
             <CommentsList key={index} data={comment.replies}/>
            </div>
        </div>  
        
        ))}
      </div>
    )
  }



  // below is comment container
  const Comments = () => {
    return (
      <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments :</h1>
      {/* <Comment data={commentData[0]}/> */}
      <CommentsList data={commentData}/>
      </div>
    )
  }

  export default Comments
