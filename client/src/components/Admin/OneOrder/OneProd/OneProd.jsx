import React ,{useState,useEffect} from 'react'
import axios from "axios";
function OneProd({prod}) {
    const [product,setProduct]=useState("")

  useEffect(() => {
           axios.get(`http://localhost:5000/product/${prod.productId}`).then((res)=>{
            setProduct(res.data.data.productName)
           })
          },[])
  return (
    
    <li class="pl-8 pr-4 py-3 flex items-center justify-between text-sm">
                          <div class="w-0 flex-1 flex items-center">
                            <span class="ml-2 flex-1 w-0 truncate">
                              {product}   
                            </span>
                          </div>
                          
                        </li>
  )
}

export default OneProd