import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Headers from '../Components/Headers';

function Payment() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalAmount = searchParams.get('total') || 0;
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('userdata')))
  const users = auth._id
  console.log(auth);
  const [shoe] = useState({
    name: "Sport X Connect",
    img: "",
    price: totalAmount,
  });

  const handlePay = async () => {
    try {
      const orderResponse = await axios.post('http://localhost:8000/orders', {
        amount: shoe.price
      });

      const orderData = orderResponse.data.data;
      const options = {
        key: 'rzp_test_4Ex6Tyjkp79GFy', // Replace with your Razorpay public key
        amount: orderData.amount,
        currency: orderData.currency,
        name: shoe.name,
        description: 'Test',
        image: shoe.img,
        order_id: orderData.id,
        handler: function (response) {
          // Verify the payment
          axios.post('http://localhost:8000/verify', response)
            .then(verificationResponse => {
              console.log(verificationResponse.data);
            })
            .catch(error => {
              console.error('Error in payment verification:', error);
            });
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Check if Razorpay constructor is available
      if (window.Razorpay) {
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error('Razorpay library not loaded');
      }
    } catch (error) {
      console.error('Error in handlePay:', error);
    }
  };

  return (
    <>
      <Headers/>
      <div className="App">
        <div className="shoe_container" style={{ margin: "100px", padding:"30px" }} >
          <img src={process.env.PUBLIC_URL + shoe.img} alt={shoe.name} style={{ width: "350px", height: "250px" }} />
          <p className="shoe_name"><h2>{shoe.name}</h2></p>
          <p className="shoe_creator">By {auth.email}</p>
          <h4 className="shoe_price" style={{color:"red"}}>Price: ₹{shoe.price}</h4><br></br>
          <button onClick={handlePay} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Payment;