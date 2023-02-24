import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import './Checkout.css';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';

function Checkout() {
  const order = useSelector((state) => state.cart);
  const customer = useSelector((state) => state.customer);
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();
  const history = useHistory();
  const swal = withReactContent(Swal)

  const goBack = () => {
    history.push("/customerForm");
  };

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
        swal.fire({
          title: "Congratulations! We are making your order now!",
          imageUrl: 'images/pizza_penguin.webp',
          imageHeight: "350px",
          imageWidth: "200px"
        })
          .then(() => {
            history.push('/');
          })
      })
      .catch((error) => {
        console.log('error in adding product to database');
      });
  };

  return (
    <>
      <Header headerText="Prime Pizza" />
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
        <div className="checkout">
          <Table sx={{ maxWidth: 550 }} aria-label="simple table" align="center">
            <TableHead>
              <TableRow>
                <TableCell align="left" color="primary">Pizza Name</TableCell>
                <TableCell align="right">Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order && order.map((pizza, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {pizza.name}
                  </TableCell>
                  <TableCell align="right">{pizza.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        <Button id="back-btn" variant="outlined" onClick={goBack}>BACK</Button>
        <Button id="checkout-btn" variant="outlined" onClick={handleCheckout}>CHECKOUT</Button>

        <h3>Total: {total}</h3>

        
        </div>

      </div>
    </>
  );
}

export default Checkout;
