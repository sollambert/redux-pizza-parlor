function OrderItem({order}) {
    return (
        <tr>
            <td>{order.customer_name}</td>
            <td>{order.time}</td>
            <td>{order.type}</td>
            <td>{order.total}</td>
        </tr>
    )
}

export default OrderItem;