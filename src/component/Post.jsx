import React, { useContext } from 'react'
import { postlistcontext } from '../store/postlist_store'

function Post({post}) {
const{deletepost}=useContext(postlistcontext)
  return (
    <div className="card postlist postlist" style={{ width: "30rem" }}>
    <div className="card-body ">

      <h5 className='card-title'>{post.title}</h5>

      <p className="card-text">
       {post.body}
      </p>

      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <button className='deletbutton'> 
        <i className="bi bi-trash3-fill"
      onClick={()=>{deletepost(post.id)}}
      ></i>
        </button>
     </span>



      {post.tags.map((hashtag)=>
      <span className="badge rounded-pill text-bg-primary hashtag"
        key={hashtag}>
        {hashtag}
        </span>)}


     
      <div className="alert alert-info" id='reaction' role="alert">
      {`Like By  ${post.reactions.likes}  peoples !`}
      </div>
      <div className="alert alert-info" id='reaction' role="alert">
      {`Dislikes By  ${post.reactions.dislikes}  peoples !`}
      </div>
      <div className="alert alert-success" role="alert">
      {`Viewed by ${post.views} peoples !`}
      </div>
     
    </div>
  </div>
  )
}

export default Post
