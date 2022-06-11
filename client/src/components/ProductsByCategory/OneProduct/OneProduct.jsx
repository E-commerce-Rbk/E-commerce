import React from "react";

import { useNavigate } from "react-router-dom";

function OneProduct({ prod }) {
  let navigate = useNavigate();
  return (
    <div class="group relative">
      <div class="relative w-full h-80 bg-grey rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          style={{ width: "200px", heigt: "200px" }}
          src={prod.imageUrl}
          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
          class="w-full h-full object-center object-cover group-hover:opacity-75"
        ></img>
      </div>
      <h3 class="mt-6 text-sm text-gray-500">
        <span class="absolute inset-0"></span>
        {prod.productName}
      </h3>

      <br></br>
      <div className="btn-wraper">
        <p class="text-base font-semibold text-gray-900">{prod.price} TND</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <br></br>
        </div>

        {/* <button className="">More details</button> */}
      </div>

      <br></br>
    </div>
  );
}

export default OneProduct;

{
  /* {/* // <a href="#" class="group">
    //   <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
    //     <img */
}
{
  /* //       style={{ width: "150", height: "330px" }}
    //       src={prod.imageUrl}
    //       alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
    //       class="w-full h-full object-center object-cover group-hover:opacity-75"
    //     ></img> */
}
{
  /* //   </div> */
}
{
  /* //   <p class="mt-1 text-lg font-medium text-gray-900">
    //     $price:{prod.price}dt
    //   </p>
    // </a> */
}

/* {/* <Card style={{ width: '18rem' }}>{
        console.log(prod,"hello")
    }
    <Card.Img style={{width:"250px",height:"250px",margin:"10%"}} variant="top" src={prod.imageUrl} />
    <Card.Body>
      <Card.Title>{prod.productName}</Card.Title>
      <Card.Text>
        {prod.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>price:{prod.price}dt</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#"><CartPlus/></Card.Link>
      <Card.Link href="#"><CartDash/></Card.Link>
      <Button variant='info' style={{marginLeft:"45%"}}>see more</Button>
    </Card.Body>
    
  </Card>  */
