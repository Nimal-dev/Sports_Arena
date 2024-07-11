import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin_Sidebar from '../../Common/Admin_Sidebar';
import Admin_Header from '../../Common/Admin_Header';

function FeedbacksList() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/getfeedbacks')
            .then((res) => res.json())
            .then((data) => setFeedbacks(data))
            .catch((error) => toast.error('Failed to fetch feedbacks.'));
    }, []);

    return (
        <>
            <ToastContainer />
            <Admin_Sidebar/>
      <div class="content">
        <Admin_Header />
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
          <div className="bg-secondary rounded h-100 p-4">
                    <h6 className="mb-4">FEEDBACKS</h6>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">TITLE</th>
                                    <th scope="col">DESCRIPTION</th>
                                    <th scope="col">USER EMAIL</th>
                                    <th scope="col">POSTED</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feedbacks.length > 0 ? (
                                    feedbacks.map((feedback, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{feedback.title}</td>
                                            <td>{feedback.description}</td>
                                            <td>{feedback.email}</td>
                                            <td>{new Date(feedback.created_at).toLocaleString()}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center">No feedback available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
            </div>
            
        </>
    );
}

export default FeedbacksList;
