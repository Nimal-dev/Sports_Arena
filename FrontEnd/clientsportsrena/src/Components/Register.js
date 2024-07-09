import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleFileUpload = (event) => {
    const formdata = new FormData();
    formdata.append("image", event.target.files[0]);
    fetch("http://127.0.0.1:8000/api/fileupload", {
      method: "POST",
      body: formdata,
    }).then((res) => {
      res.json().then((data) => {
        setImage(data);
      });
    });
  };

  const handleSubmit = () => {
    let params = {
      name: name,
      dob: dob,
      image: image,
      password: password,
      email: email,
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
        console.log(result);
      });
  };
  return (
    <>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="dob"
        onChange={(e) => setDob(e.target.value)}
      />
      <input
        type="file"
        placeholder="image"
        onChange={(e) => handleFileUpload(e)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" onClick={handleSubmit} />
    </>
  );
}

export default Register;
