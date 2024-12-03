import React, { useContext } from 'react'
import { postlistcontext } from '../store/postlist_store'

// function WelcomeNote({handlewelbtn}) {

    function WelcomeNote(){
    const{serverposts} =useContext(postlistcontext)

    const handlewelbtn=()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data=>{
            serverposts(data.posts);
        });
        
    }
   

  return (
    <div className='welcomenote'>
      <h1>Opps!!</h1>
      <h3>There is no Posts</h3>
      <button 
      className='welbtn'
      onClick={handlewelbtn}> Get Posts from server !!</button>
    </div>
  )
}
export default WelcomeNote
