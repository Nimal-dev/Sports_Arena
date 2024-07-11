import React, {useEffect, useState} from 'react'
import ImgUrl from '../../Home/Tournament/util';

function Tournament_View() {

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
    <div class="col-12">
    <div class="bg-secondary rounded h-100 p-4">
        <h6 class="mb-4">TOURNAMENT LIST </h6>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">Contact</th>
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
                        <td>{tournament.contact}</td>
                        <td><img src={`${ImgUrl}${tournament.image}`} style={{ width: '100px', height: '100px' }} /></td>
                        
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default Tournament_View