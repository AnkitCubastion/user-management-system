import React, { useState } from "react";
import axios from "axios";
import "./singleUser.css";

const SingleUser = ({ user }) => {
  const { id, profilePicture, fullName, email, bio, interests } = user;
  const role = localStorage.getItem("role");
  const [editedInfo, setEditedInfo] = useState({
    fullName: fullName,
    email: email,
    bio: bio,
    interests: interests,
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = async () => {
    try {
      await axios.patch(`http://localhost:3000/user/${id}`, editedInfo);
      alert(`User with ID ${id} edited successfully`);
      setModalOpen(false);
      window.location.reload();
    } catch (error) {
      alert("Error editing user:", error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/user/${id}`);
      alert(`User with ID ${id} deleted successfully`);
      window.location.reload();
    } catch (error) {
      alert("Error deleting user:", error.message);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="single-user">
      <div>
        <img src={profilePicture} alt="" />
      </div>
      <div className="info-container">
        <p>{fullName}</p>
        <p>{email}</p>
        <p>{bio}</p>
        <p>{interests}</p>
      </div>
      <div className="manipulation-btn">
        <button onClick={openModal} className="edit-btn">
          Edit
        </button>
        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <label htmlFor="edit-user-information">
                Edit User Information
              </label>
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={editedInfo.fullName}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={editedInfo.email}
                onChange={handleInputChange}
              />
              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                name="bio"
                value={editedInfo.bio}
                onChange={handleInputChange}
              />
              <label htmlFor="interests">Interests:</label>
              <input
                type="text"
                id="interests"
                name="interests"
                value={editedInfo.interests}
                onChange={handleInputChange}
              />
              <button onClick={handleEdit} className="confirm-btn">
                Confirm Edit
              </button>
            </div>
          </div>
        )}
        {role === "admin" && (
          <>
            <button onClick={handleDelete} className="delete-btn">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleUser;
