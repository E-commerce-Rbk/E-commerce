import React from 'react'

function CartElement({elem,up}) {
    const handleQantity=(type)=>{
        if (type==="-") {
           elem.quantity-- 
        }
        else{
            elem.quantity++ 
        }
        console.log(elem.quantity);
          up()
    }
  return (
    <tr>
              <td class="p-4 px-6 text-center whitespace-nowrap"><img src={elem.product.imageUrl} class="h-full w-full object-cover object-center"/></td>
              <td class="p-4 px-6 text-center whitespace-nowrap">{elem.product.productName}</td>
              <td class="p-4 px-6 text-center whitespace-nowrap">
                <div>
                  <button onClick={()=>{handleQantity("-")}} class="px-2 py-0 shadow">-</button>
                  <input
                    type="text"
                    name="qty"
                    value={elem.quantity}
                    class="w-12 text-center bg-gray-100 outline-none"
                  />
                  <button onClick={()=>{handleQantity("+")}} class="px-2 py-0 shadow">+</button>
                </div>
              </td>
              <td class="p-4 px-6 text-center whitespace-nowrap">{elem.product.price}</td>
              <td class="p-4 px-6 text-center whitespace-nowrap">
                <button class="px-2 py-0 text-red-100 bg-red-600 rounded">
                  x
                </button>
              </td>
            </tr>
  )
}

export default CartElement