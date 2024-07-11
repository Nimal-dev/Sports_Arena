import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Common/Header';
import ImgUrl from '../../Auth/util';

function UserTurfView() {
  const [turfs, setTurfs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/turfview")
      .then((res) => res.json())
      .then((result) => {
        setTurfs(result);
        console.log(result);
      })
      .catch((error) => {
        setError("Failed to fetch turfs.");
      });
  }, []);

  return (
    <>
      <Header />
      <section className="hero-banner position-relative overflow-hidden">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="position-relative left-hero-color">
                <h1 className="mb-0 fw-bold">
                  View all turf in your area
                </h1>
                <p>The Turf Booking you love.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="turf-list">
        <div className="container">
          <h2 className="my-4">Available Turfs</h2>
          <div className="row">
            {turfs.map((turf, index) => (
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="card">
                  <img src={`${ImgUrl}${turf.image}`} className="card-img-top" alt={`Turf ${index + 1}`} />
                  <div className="card-body">
                    <h5 className="card-title">{turf.name}</h5>
                    <p className="card-text">{turf.address}</p>
                    <p className="card-text">{turf.amount}</p>
                  </div>
                  <div className="d-flex justify-content-between p-4">
                    <Link to="/ViewDetails" state={{ turf }} className="btn btn-warning">View Details</Link>
                    {/* <a href="#" className="btn btn-primary">Book Now</a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default UserTurfView;
