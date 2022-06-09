import React,{useEffect,useState} from "react";
import OneProduct from "./OneProduct/OneProduct.jsx"
import {Row,Col } from "react-bootstrap";
import{getProducts}from "../../api/index.js"
const WatchesAndJewlery = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setData(res.data.filter((e)=>e.category==="Jewlery and Watches")));
  },[false]);
  return <div>this is where Beauty products should be renderd
    {console.log(data)}
    <Row style={{marginLeft:"10%",marginRight:"10%"}} >
    {data.map((e,i)=>{
      return(
        <Col style={{marginBottom:"10%"}}  xs={6} md={4}>
    <OneProduct prod={e} key={i}/></Col>
      )    
    })}
      
  </Row>
  </div>;
};
export default WatchesAndJewlery
