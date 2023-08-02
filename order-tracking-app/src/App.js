import React from 'react';
import OrderDetailsPage from './components/OrderDetailsPage';

const App = () => {
  const order = {
    orderNumber: '123456',
    customerName: 'John Doe',
    // Add more order details as needed
  };

  return (
    <div>
      {/* Other components */}
      <OrderDetailsPage order={order} />
    </div>
  );
};

export default App;