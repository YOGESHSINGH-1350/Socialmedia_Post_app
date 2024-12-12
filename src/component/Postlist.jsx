import React, { useContext} from 'react'
import Post from './post'
import { postlistcontext } from '../store/postlist_store'
import WelcomeNote from './welcomeNote'
import Spinnnerloding from './spinnnerloding'

function Postlist() {
  const{fetching,postlist} =useContext(postlistcontext)


  return (
    <>
    {fetching && <Spinnnerloding/>}
    {!fetching && postlist.length === 0 && <WelcomeNote />}
    {!fetching &&
      postlist.map((posts, index) => (
    <Post key={`${posts.id}-${index}`} post={posts} />
  ))}

    
    </>

  )
}

export default Postlist
