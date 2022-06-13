import React from 'react'

function Quantity({prod}) {
  return (
    <li class="pl-8 pr-4 py-3 flex items-center justify-between text-sm">
                          <div class="w-0 flex-1 flex items-center">
                            <span class="ml-2 flex-1 w-0 truncate">
                            {prod.quantity}
                            </span>
                          </div>
                          
                        </li>
  )
}

export default Quantity