import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    const { tournamentDetails } = location.state || {};
    const totalAmount = tournamentDetails ? tournamentDetails.price * 100 : 0; // Convert to paise
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('userdata')));
    const [error, setError] = useState();

    const handlePay = async () => {
        try {
            const orderResponse = await axios.post('http://localhost:8000/api/createOrder', {
                amount: totalAmount
            });

            const orderData = orderResponse.data.data;
            const options = {
                key: 'rzp_test_4Ex6Tyjkp79GFy', // Replace with your Razorpay public key
                amount: orderData.amount,
                currency: orderData.currency,
                name: tournamentDetails.tournamentname,
                description: 'Tournament Fee',
                image: tournamentDetails.image,
                order_id: orderData.id,
                handler: async (response) => {
                    try {
                        const verificationResponse = await axios.post('http://localhost:8000/api/verifyPayment', response);
                        if (verificationResponse.data.success) {
                            // Save tournament details to the database
                            await axios.post('http://127.0.0.1:8000/api/addtournament', {
                                ...tournamentDetails,
                                payment_verified: true
                            });
                            navigate('/success'); // Redirect to a success page
                        } else {
                            setError("Payment verification failed. Please try again.");
                        }
                    } catch (error) {
                        console.error('Error in payment verification:', error);
                        setError("Payment verification failed. Please try again.");
                    }
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error('Error in handlePay:', error);
            setError("Payment initiation failed. Please try again.");
        }
    };

    return (
        <>
            <div className="App">
                <div className="shoe_container" style={{ margin: "100px", padding: "30px" }}>
                    <img src={process.env.PUBLIC_URL + tournamentDetails.image} alt={tournamentDetails.tournamentname} style={{ width: "350px", height: "250px" }} />
                    <p className="shoe_name"><h2>{tournamentDetails.tournamentname}</h2></p>
                    <p className="shoe_creator">By {auth.email}</p>
                    <h4 className="shoe_price" style={{ color: "red" }}>Price: ₹{totalAmount / 100}</h4><br />
                    <button onClick={handlePay} className="btn btn-primary">Pay Now</button>
                </div>
            </div>
        </>
    );
}

export default Payment;
