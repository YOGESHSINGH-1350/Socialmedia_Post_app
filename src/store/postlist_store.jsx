import { createContext, useReducer } from "react";



export const postlistcontext = createContext(
    {
        postlist: [],
        addpost: () => { },
        serverposts:()=> { },
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

    const addpost=(userid,title,body,tags,reaction,views)=>{

        dispatchedpost({
            type: 'Added',
            payload: {
                id:userid,
                userid:userid,
                title: title,
                description: body,
                tags:tags,
                reactions:{
                    likes:reaction,
                    dislikes:reaction,
                },
                views:views,
            }
        })
            // console.log(`${userid}${title}${titlecontent}${hashtags}${reaction}`);
            
    }
    const serverposts=(posts)=>{

        dispatchedpost({
            type: 'postbyserver',
            payload: {
                posts,
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


    return (
        <postlistcontext.Provider value={{
            postlist,
            addpost,
            serverposts,
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