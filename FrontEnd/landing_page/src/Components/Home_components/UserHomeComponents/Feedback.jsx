import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Feedback() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
console.log(auth);



const feedback = () => {
    let params = {
        title: title,
        description: description,
        user_id: auth.id,
        email: auth.email
    };

    fetch('http://localhost:8000/api/addfeedback', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
        .then((res) => res.json())
        .then((result) => {
            if (result.message) {
                toast.success('Feedback submitted successfully!');
            } else {
                toast.error('Failed to submit feedback.');
            }
        })
        .catch((error) => {
            toast.error('An error occurred. Please try again.');
        });
};

    return (
        <>
        <ToastContainer />
        <div className="container-fluid pt-4 px-4" >
            <div className="col-sm-12 col-xl-12">
                <div className="rounded h-100 p-4">
                    <h2 className="mb-5" style={{marginLeft:"300px"}}>Add Feedback</h2>
                    <div style={{width:"700px", marginLeft:"300px"}}>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Subject</label>
                            <div className="col-sm-10">
                                <input type="text" name='title' className="form-control"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <textarea name='description' className="form-control"
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                        <button type="button" onClick={feedback} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Feedback;