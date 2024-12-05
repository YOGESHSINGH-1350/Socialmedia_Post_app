import React, { useContext, useEffect } from 'react'
import Post from './post'
import { postlistcontext } from '../store/postlist_store'
import WelcomeNote from './welcomeNote'

function Postlist() {
  const{serverposts,postlist} =useContext(postlistcontext)

  useEffect(()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data=> {
      // console.log(data.posts);
      serverposts(data.posts)
    });
  },[])
      
    
     // console.log("get post deletes");

  return (
    <>
    {postlist.length === 0 && <WelcomeNote />}
    {postlist.map((post)=>
      <Post 
      key={post.id} 
      post={post}/>
      )}
    
    </>

  )
}

export default Postlist
