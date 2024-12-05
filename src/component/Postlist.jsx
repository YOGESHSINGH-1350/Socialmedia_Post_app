import React, { useContext, useState } from 'react'
import Post from './post'
import { postlistcontext } from '../store/postlist_store'
import WelcomeNote from './welcomeNote'

function Postlist() {
  const{serverposts,postlist} =useContext(postlistcontext)
  const[datafetched,setdatafetched]=useState("false");
    if(datafetched==='false'){
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data=> {
        // console.log(data.posts);
        serverposts(data.posts)
      });
      setdatafetched("true");
    }
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
