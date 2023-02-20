import React from 'react'
import user from "../utils/user.png";


const SingleComment = ({comment}) =>{
    return <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
                 <img alt="user" className='h-8' 
                    src={user}
                 />
                <div className="px-3">
                    <p>{comment.name}</p>
                    <p>{comment.text}</p>
                </div>
            </div>
}

const CommentsList = ({comments}) => {
  return comments.map((coment,index)=>(
            <div key={index}>
                <SingleComment comment={coment} />
                <div  className="pl-5 border border-l-black ml-5">
                    <CommentsList comments={coment.replies} />
                </div>
            </div>
        ))
    
}

export default CommentsList;