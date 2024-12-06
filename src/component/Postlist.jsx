import React, { useContext, useEffect, useState } from 'react'
import Post from './post'
import { postlistcontext } from '../store/postlist_store'
import WelcomeNote from './welcomeNote'
import Spinnnerloding from './spinnnerloding'

function Postlist() {
  const{serverposts,postlist} =useContext(postlistcontext)

const[fetching,setfetching]=useState(false)

  useEffect(()=>{
    const controller= new AbortController();
    const signal=controller.signal
    setfetching(true)
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data=> {
      // console.log(data.posts);
      serverposts(data.posts)
      setfetching(false)
    });

    return()=>{
      controller.abort()
    }
  },[])
      
    
     // console.log("get post deletes");

  return (
    <>
    {fetching && <Spinnnerloding/>}
    {!fetching && postlist.length === 0 && <WelcomeNote />}
    {!fetching && postlist.map((post)=>
      <Post 
      key={post.id} 
      post={post}/>
      )}
    
    </>

  )
}

export default Postlist
