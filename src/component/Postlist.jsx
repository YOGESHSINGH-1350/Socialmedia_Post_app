import React, { useContext, useState} from 'react'
import Post from './post'
import { postlistcontext } from '../store/postlist_store'
import WelcomeNote from './welcomeNote'
import Spinnnerloding from './spinnnerloding'
import { useLoaderData } from 'react-router-dom'

function Postlist() {

  // const{postlist}useContext(postlistcontext)

  const postlist=useLoaderData()


  return (
    <>
   
   {/* {fetching && <Spinnnerloding/>}
    {!fetching && postlist.length === 0 && <WelcomeNote />}
    {!fetching &&
      postlist.map((posts, index) => (
      <Post key={posts.id} post={posts} />
  ))} */}
   
    {postlist.length === 0 && <WelcomeNote />}
    {postlist.map(
      (posts) => 
        (<Post key={posts.id}
           post={posts} />
           ))}    </>

  )
}

export const postLoader=async ()=>{

  
  const res = await fetch('https://dummyjson.com/posts')
  const data = await res.json()
  return data.posts
}



export default Postlist
