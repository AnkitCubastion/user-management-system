import React, { useEffect } from "react";
import axios from "axios";
import SingleUser from "./singleUser";
import "./database.css";
import { useUserContext } from "../context/userContext";

const Database = () => {
  const { users, updateUserList } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user", {
          params: {
            role: "user",
          },
        });
        updateUserList(response.data);
      } catch (error) {
        alert("Some Error Happened!");
      }
    };

    fetchData();
  }, [updateUserList]);

  return (
    <div className="database-container">
      <h1>Database</h1>
      <div className="database-subcontainer">
        {users.map((user) => (
          <SingleUser key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Database;
