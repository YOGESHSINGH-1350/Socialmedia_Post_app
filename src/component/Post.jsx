import React, { useContext } from 'react'
import { postlistcontext } from '../store/postlist_store'

function Post({post}) {
const{deletepost}=useContext(postlistcontext)
  return (
    <div className="card postlist cpostlist" style={{ width: "30rem" }}>
    <div className="card-body ">

      <h5 className='card-title'>{post.title}</h5>

      <p className="card-text"> {post.body} </p>

      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <button className='deletbutton'> 
        <i className="bi bi-trash3-fill"
      onClick={()=>{deletepost(post.id)}}
      ></i>
        </button>
     </span>



      {post.tags.map((tags)=>
      <span className="badge rounded-pill text-bg-primary hashtag"
        key={tags}>
        {tags}
        </span>)}


    <div className='alertrec'>

        <div className="alert alert-info" id='reaction' role="alert">
      Liked by {post.reactions.likes} peoples!
      </div>

      <div className="alert alert-success" role="alert">
      Viewed by {post.views} peoples ! 
      </div>

    </div>       
     
    </div>
  </div>
  )
}

export default Post
