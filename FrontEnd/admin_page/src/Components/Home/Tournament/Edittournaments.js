import React, { useEffect, useState } from 'react';
// import TurfSidbar from '../Turf/TurfSidbar';
// import TurfHeader from '../Turf/TurfHeader';
import { useLocation, useNavigate } from 'react-router-dom';
import ImgUrl from './util';
import Admin_Sidebar from '../../Common/Admin_Sidebar';
import Admin_Header from '../../Common/Admin_Header';

function Edittournaments() {
    const [tournamentname, setTournamentname] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [turfs, setTurfs] = useState([]);
    const [turf, setTurf] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;

    useEffect(() => {
        // Fetch existing tournament details
        fetch(`http://localhost:8000/api/gettournament/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setTournamentname(result.tournamentname);
                setImage(result.image);
                setDate(result.datetime);
                setPrice(result.price);
                setTurf(result.turf_id);
            })
            .catch((error) => {
                setError('Error fetching tournament details.');
            });

        // Fetch turfs for the dropdown
        fetch("http://localhost:8000/api/turfview")
            .then((res) => res.json())
            .then((result) => {
                setTurfs(result);
            })
            .catch((error) => {
                setError('Error fetching turfs.');
            });
    }, [id]);

    const handleFileUpload = (event) => {
        const formdata = new FormData();
        formdata.append("file", event.target.files[0]);
        fetch("http://127.0.0.1:8000/api/fileUpload", {
            method: "POST",
            body: formdata,
        }).then((res) => {
            res.json().then((data) => {
                setImage(data.filepath); // Assuming the API returns the file path in 'data.filepath'
            });
        }).catch((error) => {
            setError('File upload failed.');
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8000/api/updatetournament/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tournamentname,
                image,
                date,
                price,
                turf_id: turf,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    navigate('/');
                } else {
                    setError('Error updating tournament details.');
                }
            })
            .catch((error) => {
                setError('Error updating tournament details.');
            });
    };

    return (
    <>
    
        <Admin_Sidebar />
      <div class="content">
        <Admin_Header />
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
                        <div className="col-sm-12 col-xl-8">
                            <div className="bg-secondary rounded h-100 p-4">
                                <h6 className="mb-4">Editing Tournament Details</h6>
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
                                            onChange={handleFileUpload}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label">
                                            Turf
                                        </label>
                                        <select
                                            className="form-select mb-3"
                                            id="category"
                                            value={turf}
                                            onChange={(event) => setTurf(event.target.value)}
                                        >
                                            <option value="">Select Turf</option>
                                            {turfs.map((item) => (
                                                <option key={item.id} value={item.id}>{item.name}</option>
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
                                        Update Tournament
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

export default Edittournaments;
