import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Success = () => {
  const user = useSelector(state => state.user);

  useEffect(() => {
    const updateOrderStatus = async () => {
      if (user.email) {
        try {
          const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/update-payment-status`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ userEmail: user.email })
          });

          if (res.ok) {
            console.log('Order status updated successfully');
          } else {
            console.error(user.email,'Failed to update order status');
          }
        } catch (error) {
          console.error('Error updating order status:', error);
        }
      }
    };

    updateOrderStatus();
  }, [user.email]);

  // Call toast.success outside of return
  toast.success('Payment successful. Cart items stored.');

  return (
    <div className='bg-green-200 w-full max-w-md m-auto h-36 flex justify-center items-center'>
      <p className='font-bold text-2xl text-green-700'>Payment is Successful!</p>
    </div>
  );
};

export default Success;
