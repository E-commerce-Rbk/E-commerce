import React ,{useState,useEffect} from 'react'
import axios from "axios";
import OneProd from './OneProd/OneProd.jsx';
import Quantity from './Quantity/Quantity.jsx';

function OneOrder({cart,validate}) {
    const [user, setUser] = useState({});
    useEffect(() => {    
        axios.get(`http://localhost:5000/user/${cart.userId}`)
       .then((res)=>{
       setUser(res.data)
       })              
     }
    ,[]) 
      
  return (
    <div class="border-t border-gray-200">
                 <dl>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">UeserName</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.userName}</dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {user.adress}
                    </dd>
                  </div>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Phone Number
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {user.phoneNumber}
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Products</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul
                        role="list"
                        class="border border-gray-200 rounded-md divide-y divide-gray-200"
                      >
                       {cart.products.map((e)=><><OneProd prod={e}/> <Quantity prod={e}/></>)}
                      </ul>
                    </dd>
                  </div>
                </dl>
                <button style={{marginLeft:"30%",marginBottom:"5%",marginRight:"30%"}} class="btn" onClick={()=>{validate(cart)}}>validate</button>
              </div>
              
  )
}

export default OneOrder