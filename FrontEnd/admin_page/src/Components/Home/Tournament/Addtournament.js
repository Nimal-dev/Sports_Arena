import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Admin_Sidebar from "../../Common/Admin_Sidebar";
import Admin_Header from "../../Common/Admin_Header";

function Addtournament() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
  const [tournamentname, setTournamentname] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [turfs, setTurfs] = useState([]);
  const [selectedTurf, setSelectedTurf] = useState(""); // State to hold selected turf ID
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tournamentname || !image || !date || !price || !selectedTurf) {
      setError("Please fill in all fields.");
      return;
    }

    let formData = new FormData();
    formData.append("tournamentname", tournamentname);
    formData.append("image", image);
    formData.append("date", date);
    formData.append("price", price);
    formData.append("tournamentid", auth.id);
    formData.append("turf_id", selectedTurf);

    fetch("http://127.0.0.1:8000/api/addtournament", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setTournamentname("");
          setImage("");
          setDate("");
          setPrice("");
          setSelectedTurf("");
          setError("");
          navigate("/");
        } else {
          setError(result.message || "Failed to add tournament.");
        }
      })
      .catch((error) => {
        setError("An error occurred. Please try again.");
      });
  };

  const handleFileUpload = (event, setFile) => {
    const formdata = new FormData();
    formdata.append("file", event.target.files[0]);
    fetch("http://127.0.0.1:8000/api/tournamentfileUpload", {
      method: "POST",
      body: formdata,
    }).then((res) => {
      res.json().then((data) => {
        setFile(data.filepath); // Assuming the API returns the file path in 'data.filepath'
      })
      .catch((error) => {
        setError("Failed to upload file. Please try again.");
      });
    });
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/turfview")
      .then((res) => res.json())
      .then((result) => {
        setTurfs(result);
      })
      .catch((error) => {
        setError("Failed to fetch turfs.");
      });
  }, []);

  return (
    <>
      <Admin_Sidebar />
      <div class="content">
        <Admin_Header />
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
            <div className="col-sm-12 col-xl-8">
              <div className="bg-secondary rounded h-100 p-4">
                <h6 className="mb-4">Adding Tournament details</h6>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="tournamentname" className="form-label">
                      Tournament Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tournamentname"
                      value={tournamentname}
                      onChange={(e) => setTournamentname(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Tournament Image</label>
                    <input
                      type="file"
                      className="form-control bg-dark"
                      id="formFile"
                      onChange={(e) => handleFileUpload(e, setImage)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      Turf
                    </label>
                    <select
                      className="form-select mb-3"
                      id="category"
                      value={selectedTurf}
                      onChange={(event) => setSelectedTurf(event.target.value)}
                    >
                      <option value="">Select Turf</option>
                      {turfs.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Add Tournament
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addtournament;
