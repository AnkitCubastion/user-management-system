import React, { useEffect } from "react";
import axios from "axios";
<<<<<<< Updated upstream
=======
import SingleUser from "./singleUser";
import "./database.css";
import { useUserContext } from "../context/userContext";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
        console.log(response);
=======
        updateUserList(response.data);
>>>>>>> Stashed changes
      } catch (error) {
        alert("Some Error Happened!");
      }
    };

    fetchData();
  }, [updateUserList]);

  return (
    <div className="database-container">
      <h1>Database</h1>
      <div className="database-subcontainer"></div>
    </div>
  );
};

export default Database;
