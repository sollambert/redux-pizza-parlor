import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

function Checkout() {
    // const order = useSelector('order')


   const [order, setOrders ] = useState({
    customer_name: 'Xai',
    street_address: '1111 lee ave',
    city: 'Brooklyn Center',
    zip: 22222,
    type: 'Pick up',
    total: 22.22,
    pizzas: [
        {
            name:  'Tomato Soup',
            description: 'If you like pizza, but you hate the toppings, the cheese, and the crust, you\'ll love this!',
            price: 12.99,
            image_path: 'images/pizza_photo.png'
        },
        {
            name:  'Tomato Soup',
            description: 'If you like pizza, but you hate the toppings, the cheese, and the crust, you\'ll love this!',
            price: 12.99,
            image_path: 'images/pizza_photo.png'
        }
    ]
   })

   const handleCheckout = () => {
    //axios call here
    console.log('here', order)
    axios.post('/api/order/', order)
    .then((response) => {
      // console.log('success - product added to database')
      dispatch({ type: 'CLEAR_CART' });

      //Navigate back to pizza list
      history.push('/');
    })
    .catch((error)=> {
      console.log('error in adding product to database')
    })
   }


  return (
    <div>
      <h1>Step 3: Checkout</h1>
      <p>{order.customer_name}</p>
      <p>{order.street_address}</p>
      <p>{order.city}</p>
      <p>{order.zip}</p>
      <p>{order.type} (delivery or pickup)</p>

  
      <table>
        <thead>
  <tr>
    <th>Name</th>
    <th>Cost</th>
  </tr>
  </thead>
    <tbody>
  {order.pizzas.map((pizza, i) => {
    return (
        <tr key ={i}>
        <td>{pizza.name}</td>
        <td>{pizza.price}</td>
      </tr>
    )
  })}
  </tbody>
</table>


<h2>Total: {order.total}</h2>

<button onClick={handleCheckout}>Checkout</button>

    </div>
  );
}

export default Checkout;

// "customer_name" VARCHAR (1000) NOT NULL,
// "street_address" VARCHAR(1000) NOT NULL,
// "city" VARCHAR(1000) NOT NULL,
// "zip" VARCHAR(20) NOT NULL,
// "type" VARCHAR(100) NOT NULL,
// "total" NUMERIC (20, 2) NOT NULL,
// "time
