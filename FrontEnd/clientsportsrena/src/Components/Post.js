import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import ImgUrl from "./img";

function Post() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [viewpost, setViewpost] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [comment, setComment] = useState("");
  const [viewcomment, setViewcomment] = useState([]);
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("userdata")) || null
  );

  const handleFileUpload = (event) => {
    const formdata = new FormData();
    formdata.append("image", event.target.files[0]);
    fetch("http://127.0.0.1:8000/api/fileupload", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const handleSubmit = () => {
    let params = {
      user_id: auth.id,
      description: description,
      image: image,
    };

    fetch("http://127.0.0.1:8000/api/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // Refresh the posts after submission
        fetchPosts();
      })
      .catch((error) => {
        console.error("Error submitting post:", error);
      });
  };

  const fetchPosts = () => {
    fetch("http://127.0.0.1:8000/api/viewpost")
      .then((res) => res.json())
      .then((data) => {
        setViewpost(data);
        console.log(data, "data");
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const toggleDropdown = (postId) => {
    setDropdownVisible(dropdownVisible === postId ? null : postId);
  };

  const handleDeletepost = (iD) => {
    let param = { id: iD };
    fetch("http://localhost:8000/api/deletepost", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // Refresh the posts after deletion
        fetchPosts();
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  const addComment = (postID) => {
    let params = {
      postid: postID,
      comment: comment,
      userid: auth.id,
    };
    fetch("http://127.0.0.1:8000/api/comment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // Refresh the comments after adding a new one
        viewComment(postID);
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  const viewComment = (postid) => {
    fetch("http://127.0.0.1:8000/api/viewcomment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postid }),
    })
      .then((res) => res.json())
      .then((data) => {
        setViewcomment(data);
        console.log(data, "Show when comment");
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };


  const handleLike = (postID)=>{
    let params = {
      post_id: postID,
      user_id: auth.id,
    };
    fetch("http://127.0.0.1:8000/api/like", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  }
  const handledisLike = (postID)=>{
    let params = {
      post_id: postID,
      user_id: auth.id,
    };
    fetch("http://127.0.0.1:8000/api/dislike", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  }

  return (
    <>
      <ToastContainer />
      <div className="row">
        <div className="col-8 bg_pattern p-0">
          <div className="container px-5 py-4 main_content overflow-y-auto">
            {viewpost.map((item) => (
              <div className="row" key={item._id}>
                <div className="col">
                  <div className="card mb-3 rounded-4 border-0 bg-white shadow-lg">
                    <div className="card-body p-4">
                      <div className="d-flex gap-2 justify-content-between mb-3">
                        <div className="d-flex gap-2 align-items-center">
                          <img
                            src={`${ImgUrl}${item.user_image}`}
                            alt="User avatar"
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                            }}
                          />
                          <p className="card-title m-0 text-capitalize fw-semibold">
                            {item.name}
                          </p>
                        </div>
                        <div className="position-relative">
                          <i
                            className="btn fa-solid fa-ellipsis fa-sm"
                            onClick={() => toggleDropdown(item.post_id)}
                          ></i>
                          {dropdownVisible === item.post_id && (
                            <div className="dropdown-menu show end-0 p-3 shadow-lg border-0">
                              <Link
                                to=""
                                onClick={() => handleDeletepost(item.post_id)}
                                className="text-secondary text-decoration-none d-block mt-2"
                              >
                                <i className="fa-solid fa-trash fa-sm icon-spacing fa-danger"></i>
                                Delete Post
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>

                      <img
                        src={`${ImgUrl}${item.post_image}`}
                        alt="Post cover"
                        className="h-auto w-100 rounded"
                      />
                      <p className="card-text py-3">{item.post_description}</p>

                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <i
                            className="fa-regular fa-thumbs-up me-1 fs-5"
                            style={{ color: "#000000" }}
                            onClick={() => handleLike(item.post_id)}
                          ></i>
                          <i class="fa-regular fa-thumbs-up fa-rotate-180 fs-5"
                          style={{ color: "#000000" }}
                          onClick={() => handledisLike(item.post_id)}></i> 
                          <Popup
                            trigger={<i className="fa-regular fa-comment fs-5"></i>}
                            modal
                            nested
                          >
                            {(close) => (
                              <>
                                <div className="row">
                                  <label htmlFor="" className="mb-3 mt-1">
                                    Add a comment
                                  </label>
                                  <div className="col">
                                    <input
                                      type="text"
                                      placeholder="share your comment"
                                      className="form-control rounded-pill px-4"
                                      onChange={(e) => setComment(e.target.value)}
                                    />
                                  </div>
                                  <div className="col">
                                    <input
                                      type="submit"
                                      className="btn btn-primary -btn-sm px-4 rounded-pill"
                                      onClick={() => addComment(item.post_id)}
                                    />
                                  </div>
                                </div>
                                  
                                  <button
                                  className="btn btn-primary -btn-sm px-4 rounded-pill mt-5" 
                                   onClick={() => viewComment(item.post_id)}>
                                    Show comments
                                  </button>
                                  {viewcomment.map((comment) => (
                                   
                                      <p key={comment.id}>
                                        {comment.comment} - {comment.name}
                                      </p>
                                  ))}
                              </>
                            )}
                          </Popup>
                        </div>
                        <div className="time-ago fs-6">
                          {/* {new Date(item.createdAt).toLocaleString()} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-4 border-start py-4 px-4 bg-light">
          <div className="row">
            <div className="col">
              <h5 className="mb-4 lh-1 fw-semibold">
                <i className="fa-regular fa-pen-to-square me-2"></i>
                Craft Your Perfect Post!
              </h5>
              <div className="card p-3 -h-100 overflow-hidden text-white bg-white rounded-4 shadow-lg">
                <div className="mb-2">
                  <div className="d-flex gap-2">
                    <img
                      src={`${ImgUrl}${auth.image}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      alt=""
                    />
                    <input
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      className="form-control rounded-pill px-4"
                      name="description"
                      placeholder="What's on your mind"
                    />
                  </div>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-regular fa-image fs-5 text-secondary"></i>
                  <label htmlFor="file-upload" className="btn btn-outline-secondary btn-sm rounded-pill">
                    Add photo
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                </div>
                <div className="d-grid mt-3">
                  <input
                    type="submit"
                    className="btn btn-primary rounded-pill"
                    value="Post"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
