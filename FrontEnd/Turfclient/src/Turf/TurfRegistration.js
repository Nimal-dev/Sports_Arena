import React, { useState } from "react";

function TurfRegistration() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [certificate, setCertificate] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [startingTime, setStartingTime] = useState("");
  const [endingTime, setEndingTime] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileUpload = (event, setFile) => {
    const formdata = new FormData();
    formdata.append("file", event.target.files[0]);
    fetch("http://127.0.0.1:8000/api/fileUpload", {
      method: "POST",
      body: formdata,
    }).then((res) => {
      res.json().then((data) => {
        setFile(data.filepath); // Assuming the API returns the file path in 'data.filepath'
      });
    });
  };

  const validateForm = () => {
    if (contact.length !== 10) {
      setErrorMessage("Contact number must be 10 digits.");
      return false;
    }
    if (password.length < 3) {
      setErrorMessage("Password must be at least 3 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    let params = {
      name: name,
      address: address,
      contact: contact,
      certificate: certificate,
      image: image,
      amount: amount,
      startingtime: startingTime,
      endingtime: endingTime,
      email: email,
      password: password,
    };

    fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setSuccessMessage("Registration successful!");
          setName("");
          setAddress("");
          setContact("");
          setCertificate("");
          setImage("");
          setAmount("");
          setStartingTime("");
          setEndingTime("");
          setEmail("");
          setPassword("");
        } else {
          setErrorMessage(result.message || "Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        setErrorMessage("An error occurred. Please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <input
        type="file"
        placeholder="Certificate"
        onChange={(e) => handleFileUpload(e, setCertificate)}
        required
      />
      <input
        type="file"
        placeholder="Image"
        onChange={(e) => handleFileUpload(e, setImage)}
        required
      />
      <input
        type="number"
        placeholder="Amount for 1 Hour"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="time"
        placeholder="Opening Time"
        value={startingTime}
        onChange={(e) => setStartingTime(e.target.value)}
        required
      />
      <input
        type="time"
        placeholder="Closing Time"
        value={endingTime}
        onChange={(e) => setEndingTime(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default TurfRegistration;
