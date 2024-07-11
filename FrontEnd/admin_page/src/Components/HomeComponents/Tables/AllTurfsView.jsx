import React, {useEffect, useState} from 'react'
import ImgUrl from '../../Home/Tournament/util';
import Admin_Sidebar from '../../Common/Admin_Sidebar';
import Admin_Header from '../../Common/Admin_Header';

function AllTurfsView() {
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
    
    <Admin_Sidebar />
      <div class="content">
        <Admin_Header />
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
        <h6 class="mb-4">TURF LIST</h6>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Schedule</th>
                        <th scope="col">Certificate</th>
                        <th scope="col">Image</th>
                        <th scope="col">Amount/Hr</th>
                    </tr>
                </thead>
                <tbody>
                {turfs.map((turf, index) => (
                    <tr>
                          <th scope="row">{index + 1}</th>
                        <td>{turf.name}</td>
                        <td>{turf.address}</td>
                        <td>{turf.email}</td>
                        <td>{turf.contact}</td>
                        <td>{turf.startingtime} :: {turf.endingtime}</td>
                        <td><embed src={`${ImgUrl}${turf.certificate}`} alt="" className="img-fluid rounded shadow-sm" style={{ width: '100px', height: '100px' }} /></td>
                        <td><img src={`${ImgUrl}${turf.image}`} style={{ width: '100px', height: '100px' }} /></td>
                        <td>{turf.amount}</td>
                        
                    </tr>
                ))}
                   
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
</>
  )
}

export default AllTurfsView