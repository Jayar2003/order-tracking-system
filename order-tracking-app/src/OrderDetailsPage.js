import React from 'react';

const OrderDetailsPage = ({ order }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
    <h2 style={{ marginBottom: '10px' }}>Order Details</h2>
      <p>Order Number: {order.orderNumber}</p>
      <p>Customer Name: {order.customerName}</p>
      {/* Add more order details */}
    </div>
  );
};

export default OrderDetailsPage;