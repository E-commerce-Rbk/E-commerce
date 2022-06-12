import React,{useState,useEffect} from 'react'
import CartElement from './CartElement/CartElement'
import {validateCart} from '../../api/index.js'
function ShoppingCart({cart,deccrement}) {
    //this gonna be props from the state of main component
    const[test,setTest]=useState(cart)
    const[update,setUpdate]=useState(false)
    useEffect(()=>{
    },[update])
    const up=()=>{
      setUpdate(!update)
    }
    const handleSubmit=()=>{
        let productsFilter=test.products.map((e)=>{return {productId:e.product._id,quantity:e.quantity}})
        validateCart({userId:test.userId,products:productsFilter})
    }
    return (
        <div class="container p-8 mx-auto mt-12 bg-white">
            <div class="w-full overflow-x-auto">
                <div class="my-2">
                    <h3 class="text-xl font-bold tracking-wider">Shopping Cart</h3>
                </div>
                <table class="w-full shadow-inner">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="px-6 py-3 font-bold whitespace-nowrap">Product</th>
                            <th class="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
                            <th class="px-6 py-3 font-bold whitespace-nowrap">Name</th>
                            <th class="px-6 py-3 font-bold whitespace-nowrap">Price</th>
                            <th class="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {test.products.map((e, i) => {
                            return <CartElement up={up} elem={e} key={i} deccrement={deccrement} />
                        })}
                    </tbody>
                </table>
                <div class="flex justify-end mt-4 space-x-2">
                    <button
                        class="
              px-6
              py-3
              text-sm text-gray-800
              bg-gray-200
              hover:bg-gray-400
            "
                    >
                        Cannel
                    </button>
                    <button
                        class="
              px-6
              py-3
              text-sm text-white
              bg-indigo-500
              hover:bg-indigo-600
            "
            onClick={handleSubmit}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ShoppingCart