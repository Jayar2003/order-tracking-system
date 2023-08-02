import React from 'react';
import OrderStatusSection from './components/OrderStatusSection';

const App = () => {
  const order = {
    orderNumber: '123456',
    customerName: 'John Doe',
    status: 'Processing',
    // Add more order details as needed
  };

  return (
    <div>
      {/* Other components */}
      <OrderStatusSection status={order.status} />
    </div>
  );
};

export default App;