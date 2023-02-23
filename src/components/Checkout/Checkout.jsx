import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Checkout.css';
import { rootReducer } from '../../index'

function Checkout() {

const order = useSelector((state) => state.cart);
const customer = useSelector((state) => state.customer);
const total = useSelector((state) => state.total);

console.log('customer', customer)

  const dispatch = useDispatch();
  const history = useHistory();

  console.log('order', order);

//   const [order, setOrders] = useState({
//     customer_name: 'Xai',
//     street_address: '1111 lee ave',
//     city: 'Brooklyn Center',
//     zip: 22222,
//     type: 'Pick up',
//     total: 22.22,
//     pizzas: [
//       {
//         name: 'Tomato Soup',
//         description:
//           "If you like pizza, but you hate the toppings, the cheese, and the crust, you'll love this!",
//         price: 12.99,
//         image_path: 'images/pizza_photo.png',
//       },
//       {
//         name: 'Tomato Soup',
//         description:
//           "If you like pizza, but you hate the toppings, the cheese, and the crust, you'll love this!",
//         price: 12.99,
//         image_path: 'images/pizza_photo.png',
//       },
//     ],
//   });

  //! when checkout btn is clicked
  const handleCheckout = () => {
    //axios call here
  
    const postOrders = {
      ...order,
      ...customer,
      total,
      pizzas: order.map((pizza) => {
        pizza.quantity = 1;
        return pizza;
      }),
    }
      console.log('here', postOrders);
    axios
      .post('/api/order', postOrders)
      .then((response) => {
        console.log('response', response)
        // console.log('success - pizzas added to database')
        // dispatch({ type: 'CLEAR_CART' });

        //! Navigate back to pizza list
        history.push('/');
      })
      .catch((error) => {
        console.log('error in adding product to database');
      });
  };

  return (
    <div>
      <h2>Step 3: Checkout</h2>
      <div className="order-type">
      <p>{customer.type}</p>
      </div>
      <div className="customer-info">
        <p>{customer.customer_name}</p>
        <p>{customer.street_address}</p>
        <p>{customer.city}</p>
        <p>{customer.zip}</p>
      </div>
     
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {order.map((pizza, i) => {
            return (
              <tr key={i}>
                <td>{pizza.name}</td>
                <td>{pizza.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Total: {total}</h3>

      <button onClick={handleCheckout}>CHECKOUT</button>
    </div>
  );
}

export default Checkout;
