import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Createpost, { postAction } from './component/Createpost.jsx'
import Postlist, { postLoader } from './component/Postlist.jsx'

const router=createBrowserRouter([

{ path:"/",
  element:<App></App>,
  
  children:[
  {path:"/",element:<Postlist/>,loader:postLoader},
  {path:"/create-post", element:<Createpost/>, action:postAction}
]
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
