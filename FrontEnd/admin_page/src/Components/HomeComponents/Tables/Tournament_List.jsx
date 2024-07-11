import React, { useEffect, useState } from 'react';
import ImgUrl from '../../Home/Tournament/util';

function Tournament_List() {
    const [tournaments, setTournaments] = useState([]);
    const [error, setError] = useState("");
    const auth = JSON.parse(localStorage.getItem("userdata"));

    useEffect(() => {
        if (auth && auth.id) {
            fetch("http://localhost:8000/api/gettournament", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ tournamentid: auth.id })
            })
                .then((res) => res.json())
                .then((result) => {
                    setTournaments(result);
                    console.log(result);
                })
                .catch((error) => {
                    setError("Failed to fetch tournaments.");
                });
        }
    }, [auth]);

    return (
        <div className="col-6">
            <div className="bg-secondary rounded h-100 p-4">
                <h6 className="mb-4">TOURNAMENT LIST</h6>
                <div className="table-responsive">
                    <table className="table">
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
                                <tr key={tournament.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{tournament.tournamentname}</td>
                                    <td>{new Date(tournament.datetime).toLocaleDateString()}</td>
                                    <td>{tournament.price}</td>
                                    <td>
                                        <img
                                            src={`${ImgUrl}${tournament.image}`}
                                            style={{ width: '100px', height: '100px' }}
                                            alt="Tournament"
                                        />
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

export default Tournament_List;
