import axios from 'axios';
import { useState, } from 'react';
import Header from '../Header/Header';
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
            <Header headerText="Prime Pizza Orders"/>
            <OrderTable orders={orders}/>
        </>
    )
}

export default Admin;