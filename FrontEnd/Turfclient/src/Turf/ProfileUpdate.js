import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImgUrl from './util';
function ProfileUpdate() {

    const location = useLocation();

    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));

    const [name, setName] = useState(auth ? auth.name : '');
    const [address, setAddress] = useState(auth ? auth.address : '');
    const [contact, setContact] = useState(auth ? auth.contact : '');
    const [certificate, setCertificate] = useState(auth ? auth.certificate : '');
    const [image, setImage] = useState(auth ? auth.image : '');
    const [amount, setAmount] = useState(auth ? auth.amount : '');
    const [startingTime, setStartingTime] = useState(auth ? auth.startingtime : '');
    const [endingTime, setEndingTime] = useState(auth ? auth.endingtime : '');
    const [email, setEmail] = useState(auth ? auth.email : '');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    console.log(auth)


    // useEffect(() => {
    //     if (auth) {
    //         setName(auth.name || '');
    //         setAddress(auth.address || '');
    //         setContact(auth.contact || '');
    //         setCertificate(auth.certificate || '');
    //         setImage(auth.image || '');
    //         setAmount(auth.amount || '');
    //         setStartingTime(auth.startingtime || '');
    //         setEndingTime(auth.endingtime || '');
    //         setEmail(auth.email || '');
    //     }
    // }, [auth]);

    // Function to handle file upload
    const handleFileUpload = (event, setFile) => {
        const formdata = new FormData();
        formdata.append('file', event.target.files[0]);

        fetch('http://127.0.0.1:8000/api/fileUpload', {
            method: 'POST',
            body: formdata,
        })
            .then(res => res.json())
            .then(data => {
                setFile(data.filepath); // Assuming the API returns the file path
            })
            .catch(error => {
                console.error('Error uploading file:', error);
                setErrorMessage('An error occurred while uploading the file.');
            });
    };

    // Function to validate form
    // const validateForm = () => {
    //     if (contact.length !== 10) {
    //         setErrorMessage('Contact number must be 10 digits.');
    //         return false;
    //     }

    //     return true;
    // };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        // if (!validateForm()) {
        //     return;
        // }

        let params = {
            id: auth.id,
            name: name,
            address: address,
            contact: contact,
            certificate: certificate,
            image: image,
            amount: amount,
            startingtime: startingTime,
            endingtime: endingTime,
            email: email,
        };
        console.log(params);
        fetch('http://127.0.0.1:8000/api/updateprofile', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    setSuccessMessage('Profile updated successfully!');
                    setName('');
                    setAddress('');
                    setContact('');
                    setCertificate('');
                    setImage('');
                    setAmount('');
                    setStartingTime('');
                    setEndingTime('');
                    setEmail('');
                } else {
                    setErrorMessage(result.message || 'Profile update failed. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error updating profile:', error);
                setErrorMessage('An error occurred. Please try again.');
            });
    };

    return (
        <div>
           
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                <input type="tel" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} required />

                {/* File upload for Certificate */}
                <input type="file" onChange={(e) => handleFileUpload(e, setCertificate)} />

                {/* File upload for Image */}
                <input type="file" onChange={(e) => handleFileUpload(e, setImage)} />

                <input type="number" placeholder="Amount for 1 Hour" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                <input type="time" placeholder="Opening Time" value={startingTime} onChange={(e) => setStartingTime(e.target.value)} required />
                <input type="time" placeholder="Closing Time" value={endingTime} onChange={(e) => setEndingTime(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                {/* <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /> */}

                {/* Display uploaded documents */}
                <div className="py-4 px-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h5 className="mb-0 text-dark">Uploaded Documents</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-2 pr-lg-1">
                            <img src={`${ImgUrl}${image}`} alt="" className="img-fluid rounded shadow-sm" />
                        </div>
                        <div className="col-lg-6 mb-2 pl-lg-1">
                            <embed src={`${ImgUrl}${certificate}`} alt="" className="img-fluid rounded shadow-sm" style={{ height: '500px', width: '600px' }} />
                        </div>
                        <div className="col-lg-6 mb-2 pl-lg-1"></div>
                    </div>
                </div>

                {/* Error and success messages */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}

                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default ProfileUpdate;
