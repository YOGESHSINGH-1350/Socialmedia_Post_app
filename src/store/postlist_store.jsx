import { createContext, useReducer, useState,useEffect} from "react";



export const postlistcontext = createContext(
    {
        postlist: [],
        addpost: () => { },
        fetching:false,
        deletepost: () => { },
    }
)

const postlistReducer = (currpost, action)=>{
    let newpostlist=currpost;
    if(action.type==='Deleted'){
        newpostlist=currpost.filter(
            (post)=>post.id !== action.payload.postId)
    }

    else if( action.type==='postbyserver'){
        newpostlist=action.payload.posts
    }

    else if( action.type==='Added'){
        newpostlist=[...currpost,action.payload]
    }
        
    return newpostlist;

}


const Postlistcontextprovider = ({ children }) => {

    const [postlist, dispatchedpost] = useReducer(postlistReducer, [])

    const addpost=(post)=>{

        dispatchedpost({
            type: 'Added',
            payload:post,
        })
            // console.log(`${userid}${title}${titlecontent}${hashtags}${reaction}`);
            
    }
    const serverposts=(posts)=>{

        dispatchedpost({
            type: 'postbyserver',
            payload: {
               posts:posts,
            }
        })
            // console.log(`${userid}${title}${titlecontent}${hashtags}${reaction}`);
            
    }



    const deletepost=(postId)=>{     
        // console.log(`post Deleted ${postId}`);   
        dispatchedpost({       
            type:'Deleted',
            payload:{
            postId,
            }
        })
        
    }


    //no need to use this because we use router loader in postlist

//     const[fetching,setfetching]=useState(false)

//     useEffect(()=>{
//     const controller= new AbortController();
//     const signal=controller.signal
//     setfetching(true)
//     fetch('https://dummyjson.com/posts')
//     .then(res => res.json())
//     .then(data=> {
//     //   console.log(data.posts);
//       serverposts(data.posts)
//       setfetching(false)
//     });

//     return()=>{
//       controller.abort()
//     }
//   },[])


    return (
        <postlistcontext.Provider value={{
            postlist,
            addpost,
            deletepost,
        }}>
            {children}
        </postlistcontext.Provider>
    )
}


// const default_postlist=[
//     {
//     id:"11",
//     title: "Going to Manali",
//     description: "Hello Everyone, I am going to Manali. Hope Enjoying Alot",
//     hashtag:['manali','enjoy','moment'],
//     reactions:'5'
//     },
//     {
//     id:"15",
//     title: "Autobots",
//     description: "My name is Optiums Prime. Leader of matrix ",
//     hashtag:['autobot','matrix','movies'],
//     reactions:'15'
//     },
    
// ]


export default Postlistcontextprovider;