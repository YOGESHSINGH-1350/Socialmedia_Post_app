import React, { useContext } from 'react'
import Post from './post'
import { postlistcontext } from '../store/postlist_store'
import WelcomeNote from './welcomeNote'

function Postlist() {
  const{serverposts,postlist} =useContext(postlistcontext)

  const getwelbtn=()=>{
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data=> {
        // console.log(data.posts);
        
        serverposts(data.posts)
      });
      // console.log("get post deletes");
      
  }

  return (
    <>
    {postlist.length === 0 && <WelcomeNote handlewelbtn={getwelbtn}/>}
    {postlist.map((post)=>
      <Post 
      key={post.id} 
      post={post}/>
      )}
    
    </>

  )
}

export default Postlist
