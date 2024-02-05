import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    role: "",
    fullName: "",
    email: "",
    password: "",
    profilePicture: "",
    bio: "",
    interests: "",
    department: "",
    empID: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const existingUser = await axios.get("http://localhost:3000/user", {
        params: { email: formData.email },
      });

      if (existingUser.data.length > 0) {
        alert(
          "User with this email already exists. Please use a different email."
        );
        return;
      }

      const response = await axios.post("http://localhost:3000/user", formData);
      console.log(response.data);
      alert("User signed up successfully:");
      navigate("/login");
    } catch (error) {
      alert("Error signing up:");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="signup-form">
          <div className="signup-subcontainer">
            <label htmlFor="role">Choose Role:</label>
            <select
              className="role-selector"
              name="role"
              type="text"
              value={formData.role}
              onChange={handleInputChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
            </select>
          </div>

          <div className="signup-subcontainer">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="signup-subcontainer">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="signup-subcontainer">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="signup-subcontainer">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <input
              type="url"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleInputChange}
            />
          </div>
          <div className="signup-subcontainer">
            <label htmlFor="bio">Bio:</label>
            <input
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
            />
          </div>
          <div className="signup-subcontainer">
            <label htmlFor="interests">Interests:</label>
            <input
              type="text"
              name="interests"
              value={formData.interests}
              onChange={handleInputChange}
            />
          </div>

          {formData.role === "admin" && (
            <div className="signup-subcontainer">
              <label htmlFor="empID">empID:</label>
              <input
                type="text"
                name="empID"
                value={formData.empID}
                onChange={handleInputChange}
              />
            </div>
          )}

          {formData.role === "editor" && (
            <div className="signup-subcontainer">
              <label htmlFor="department">Department:</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
              />
            </div>
          )}

          <div className="signup-subcontainer">
            <button className="signup-btn" type="submit">
              Signup
            </button>
          </div>
        </div>
      </form>
      <div className="login-subcontainer">
        <div>Already a member?</div>
        <Link to={"/login"}>
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
