import React, { useState } from 'react';
import './Profile.css';
import ImgUrl from './util';
import { Link } from 'react-router-dom'; 

export default function Profile() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
  console.log(auth);

  return (
    <div>
      <div className="row py-5 px-4">
        <div className="col-md-5 mx-auto">
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
              <div className="media align-items-end profile-head">
                <div className="profile mr-3" style={{ display: "flex" }}>
                  <div>
                    <img src={`${ImgUrl}${auth.image}`} alt="" width="150" className="rounded mb-2 img-thumbnail" />
                  </div>
                  <div className="media-body text-white" style={{ marginLeft: "200px" }}>
                    <h2 className="mt-0 mb-0">{auth.name}</h2>
                    <h4 className="small mb-4">
                      <i className="mr-2"></i>{auth.address}
                    </h4>
                  </div>
                </div>

                <Link to="/proileupdate"
        state={{ auth}} className="btn btn-outline-dark btn-lg btn-block">Edit profile</Link>
              </div>
            </div>
            <div className="p-4 d-flex justify-content-end text-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block text-dark">{auth.startingtime}</h5>
                  <small className="text-dark"><i className="mr-1"></i>Opening Time</small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block text-dark"></h5>
                  <small className="text-dark"><i className="mr-1"></i></small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block text-dark">{auth.endingtime}</h5>
                  <small className="text-dark"><i className="mr-1"></i>Closing Time</small>
                </li>
              </ul>
            </div>
            <div className="px-4 py-3">
              <h5 className="mb-0 text-dark">About</h5>
              <div className="p-4 rounded shadow-sm">
                <div className="d-flex justify-content-between">
                  <p className="font-italic mb-0">Contact</p>
                  <p className="mb-0">{auth.contact}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="font-italic mb-0">Email id</p>
                  <p className="mb-0">{auth.email}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="font-italic mb-0">Amount for one hour</p>
                  <p className="mb-0">{auth.amount}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="font-italic mb-0">Registration Date</p>
                  <p className="mb-0">{auth.created_at}</p>
                </div>
              </div>
            </div>
            <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0 text-dark">Uploaded Documents</h5>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-2 pr-lg-1">
                  <img src={`${ImgUrl}${auth.image}`} alt="" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-lg-6 mb-2 pl-lg-1">
                  <embed src={`${ImgUrl}${auth.certificate}`} alt="" className="img-fluid rounded shadow-sm" style={{ height: "200px" }} />
                </div>
                <div className="col-lg-6 mb-2 pl-lg-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
