import axios from 'axios';
import { useState, } from 'react';
import OrderTable from './OrderTable/OrderTable';

function Admin() {

    const [orders, setOrders] = useState([]);

    const getOrder = () => {
        axios.get('/orders')
            .then((response) => {
                setOrders(response.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Prime Pizza Orders</h1>
            </header>
            <OrderTable orders={orders}/>
        </>
    )
}

export default Admin;