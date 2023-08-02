import React from 'react';

const OrderStatusSection = ({ status }) => {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <h3 style={{ marginBottom: '5px' }}>Order Status</h3>
      <p style={{ fontWeight: 'bold' }}>Current Status: {status}</p>
    </div>
  );
};

export default OrderStatusSection;