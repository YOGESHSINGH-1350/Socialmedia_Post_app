import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Slidebar from "./component/Slidebar";
import Createpost from "./component/Createpost";
import Postlist from "./component/Postlist";
import { useState } from "react";
import Postlistcontextprovider from "./store/postlist_store";
import { Outlet } from "react-router-dom";

function App() {

  const[selectedtab, setselectedtab]=useState("")

  return (
    
    <Postlistcontextprovider>
      
    <div className="app_container">

      <div className="slidebar">
        <Slidebar tab={selectedtab} handleClick={setselectedtab}></Slidebar>
        </div>

        <div className="content">
          <Header></Header>
          
          <div className="main_content">
          <Outlet></Outlet>
          </div>
         
          <Footer></Footer>
        </div>
    </div>
    
    </Postlistcontextprovider>          
  );
}

export default App;
