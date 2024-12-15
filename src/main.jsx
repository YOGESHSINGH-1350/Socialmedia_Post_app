import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Createpost from './component/Createpost.jsx'
import Postlist from './component/Postlist.jsx'

const router=createBrowserRouter([

{ path:"/",
  element:<App></App>,
  
  children:[
  {path:"/Postlist",element:<Postlist/>},
  {path:"/create-post", element:<Createpost/>}
]
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
