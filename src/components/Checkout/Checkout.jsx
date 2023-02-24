import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import './Checkout.css';

function Checkout() {
  const order = useSelector((state) => state.cart);
  const customer = useSelector((state) => state.customer);
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();
  const history = useHistory();

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
    };
    axios
      .post('/api/order', postOrders)
      .then((response) => {
        dispatch({ type: 'CLEAR_CART' });
        dispatch({ type: 'CLEAR_TOTAL' });
        dispatch({ type: 'CLEAR_CUSTOM' });

        //! Navigate back to pizza list
        history.push('/');
        // sweet alert here "Thank you for your order!"
      })
      .catch((error) => {
        console.log('error in adding product to database');
      });
  };

  return (
    <>
      <Header  headerText="Prime Pizza" />
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
            {order && order.map((pizza, i) => {
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
    </>
  );
}

export default Checkout;
