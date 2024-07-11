import React, {useEffect, useState} from 'react'
import ImgUrl from '../../Home/Tournament/util';
import Admin_Sidebar from '../../Common/Admin_Sidebar';
import Admin_Header from '../../Common/Admin_Header';

function AllTournamentsList() {

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
    
    <Admin_Sidebar />
      <div class="content">
        <Admin_Header />
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
        <h6 class="mb-4">TOURNAMENT LIST </h6>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        
                    </tr>
                </thead>
                <tbody>
                {tournaments.map((tournament, index) => (
                    <tr>
                          <th scope="row">{index + 1}</th>
                        <td>{tournament.tournamentname}</td>
                        <td>{tournament.datetime}</td>
                        <td>{tournament.price}</td>
                        <td><img src={`${ImgUrl}${tournament.image}`} style={{ width: '100px', height: '100px' }} /></td>
                        <td>{tournament.contact}</td>
                        
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

export default AllTournamentsList