import OrderItem from '../OrderItem/OrderItem'

function OrderTable({orders}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => {
                    return <OrderItem key={order.id} order={order}/>
                })}
            </tbody>
        </table>
    )
}

export default OrderTable;