import React, { useRef } from 'react'
import { useContext } from 'react'
import { postlistcontext } from '../store/postlist_store'

function Createpost() {

  const{addpost}=useContext(postlistcontext)

const useridElement=useRef()
const titleElement=useRef()
const titlecontentElement=useRef()
const hashtagsElement=useRef()
const reactionElement=useRef()
const viewsElement=useRef()

const handleOnClick=(event)=>{
  event.preventDefault();
  const postid=useridElement.current.value
  const title=titleElement.current.value
  const titlecontent=titlecontentElement.current.value
  const hashtags=hashtagsElement.current.value.split(' ')
  const reaction=reactionElement.current.value
  const views=viewsElement.current.value

  useridElement.current.value=""
  titleElement.current.value=""
  titlecontentElement.current.value=""
  hashtagsElement.current.value=""
  reactionElement.current.value=""
  viewsElement.current.value=""


  addpost(postid,title,titlecontent,hashtags,reaction,views)


}



  return (
    <form className='createpost'>

       <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        User Id
      </label>
      <input
        type="text"
        ref={useridElement}
        className="form-control"
        id=''
        placeholder='Your Id'
      />
    </div>


    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Title
      </label>
      <input
        type="text"
        ref={titleElement}
        className="form-control"
        id=''
        placeholder='How are you feeding Today...'
      />
    </div>

    <div className="mb-3 feed">
      <label 
       className="">
        Title Content
      </label>
      <textarea
        type="text"
        ref={titlecontentElement}
        placeholder='Tell more about us'
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
       Your Hashtag
      </label>
      <input
        type="text"
        ref={hashtagsElement}
        className="form-control"
        id=""
        placeholder='Type your hashtags using with sapce'
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Number of Reactions
      </label>
      <input
        type="text"
        ref={reactionElement}
        className="form-control"
        id=""
        placeholder='No. of Reaction'
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
      Number of  Viewed people
      </label>
      <input
        type="text"
        ref={viewsElement}
        className="form-control"
        id=""
        placeholder='No. of viewed people '
      />
    </div>



    <button type="click" className="btn btn-primary" onClick={handleOnClick}>
      Post
    </button>
  </form>
  
  
  )
}

export default Createpost
