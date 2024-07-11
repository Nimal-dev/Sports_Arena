import React, { useState } from "react";


function Registration() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  
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
      email: email,
      password: password,
      type:1
    };

    fetch("http://127.0.0.1:8000/api/tournamentregister", {
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

export default Registration;
