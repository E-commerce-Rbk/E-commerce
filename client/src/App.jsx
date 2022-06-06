import React, { useState,useEffect } from 'react'
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom"; 
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import {getProducts} from "./api/index.js"
const App=()=>  {
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(false)
    useEffect(() => {
      getProducts().then((res)=>setData(res.data))      
    }, [update])
    const upDate=()=>{
      setUpdate(!update)
    }
    return (
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home data={data} update={upDate}/>} />
      </Routes>
      </BrowserRouter>
     
    )
  
}

export default App