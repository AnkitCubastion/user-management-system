import React, { useState, useEffect } from "react";
import axios from "axios";

const Database = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user", {
          params: {
            role: "user",
          },
        });
        console.log(response);
      } catch (error) {
        alert("Some Error Happened!");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="database-container">
      <h1>Database</h1>
      <div className="database-subcontainer"></div>
    </div>
  );
};

export default Database;
