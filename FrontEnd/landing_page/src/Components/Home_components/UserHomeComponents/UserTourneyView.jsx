import React, {useEffect, useState} from 'react'
import ImgUrl from '../../Auth/util';
import Header from '../../Common/Header'

function UserTourneyView() {
  const [tournaments, setTournaments] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/api/getAllTournaments")
          .then((res) => res.json())
          .then((result) => {
            setTournaments(result);
            console.log(result);
          })
          .catch((error) => {
            setError("Failed to fetch tournaments.");
          });
      }, []);
  return (
   <>
   <Header/>
   <section className="hero-banner position-relative overflow-hidden">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="position-relative left-hero-color">
                <h1 className="mb-0 fw-bold">
                  See all the Tournaments Happening!
                </h1>
                <p>The Turf Booking you love.</p>
                {/* <a href="#" class="btn btn-warning btn-hover-secondery"><span class="d-inline-block me-2"><i class="ti ti-playstation-triangle"></i></span> Discover this Video</a> */}
              </div>
            </div>
            {/* <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="position-relative right-hero-color">
                <img src="../assets/images/turf.avif" style={{borderRadius:"20px"}} class="img-fluid"/> 
              </div>          
            </div> */}
          </div>
        </div>
      </section>

      <section className="turf-list">
        <div className="container">
          <h3 className="my-4">Current / Upcoming Tournaments</h3>
          <div className="row">
            {tournaments.map((tournament, index) => (
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-6" key={index}>
                <div className="card">
                  <img src={`${ImgUrl}${tournament.image}`} className="card-img-top" alt={`Tournament ${index + 1}`} />
                  <div className="card-body">
                    <h3 className="card-title">{tournament.tournamentname}</h3>
                    <p className="card-title fs-5">Turf Name: {tournament.name}</p>
                    <p className="card-title fs-5">Turf Address: {tournament.address}</p>
                    <p className="card-text fs-5">Date: {tournament.datetime}</p>
                    <p className="card-text fs-5" ><b>Price: </b>₹{tournament.price}</p>
                  </div>
                  <div className="d-flex justify-content-between p-4">
                    {/* <Link to="/ViewDetails" state={{ tournament }} className="btn btn-warning">View Details</Link> */}
                    {/* <a href="#" className="btn btn-primary">Book Now</a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   </>
  )
}

export default UserTourneyView