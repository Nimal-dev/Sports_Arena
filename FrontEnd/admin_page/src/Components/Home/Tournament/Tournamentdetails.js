import React, { useEffect, useState } from 'react';
// import TurfSidbar from '../Turf/TurfSidbar';
// import TurfHeader from '../Turf/TurfHeader';
import { Link } from 'react-router-dom';
import ImgUrl from './util';

function Tournamentdetails() {
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
    const [tournamentDetails, setTournamentDetails] = useState([]);
    const [refresh, setRefresh] = useState('');

    useEffect(() => {
        if (auth && auth.id) {
            fetch("http://localhost:8000/api/tournamentview", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ tournamentid: auth.id })
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log("Fetched tournaments:", result);
                    setTournamentDetails(result);
                })
                .catch((error) => {
                    console.error("Error fetching tournaments:", error);
                });
        }
    }, [refresh, auth]);

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/api/tournamentdelete/${id}`, {
            method: 'post',
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    setTournamentDetails(tournamentDetails.filter(tournament => tournament.id !== id));
                } else {
                    console.log("Error occurred while deleting");
                }
            })
            .catch((error) => {
                console.log("Error occurred while deleting");
            });
    };

    return (

                        <div className="col-12">
                            <div className="bg-secondary rounded h-100 p-4">
                                <h6 className="mb-4">Tournament Details Table</h6>
                                <Link to='/addtournament'>
                                    <button className='btn btn-primary'>Add tournament details</button>
                                </Link>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">SL.no</th>
                                                <th scope="col">Tournament Name</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Turf</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tournamentDetails.map((tournament, index) => (
                                                <tr key={tournament.id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{tournament.tournamentname}</td>
                                                    <td><img src={`${ImgUrl}${tournament.image}`} style={{ width: '50px', height: '50px' }} /></td>
                                                    <td>{tournament.name}</td>
                                                    <td>{new Date(tournament.datetime).toLocaleDateString()}</td>
                                                    <td>{tournament.price}</td>
                                                    <td>{tournament.status}</td>
                                                    <td>
                                                        <Link to='/edittournament' state={{ id: tournament.id }}>
                                                            <button className='btn btn-success'>Edit</button>
                                                        </Link>
                                                        <button
                                                            className='btn btn-primary mx-3'
                                                            onClick={() => handleDelete(tournament.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
    
    );
}

export default Tournamentdetails;
