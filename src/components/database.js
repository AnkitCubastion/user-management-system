import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import SingleUser from "./singleUser";
import "./database.css";
import { useUserContext } from "../context/userContext";

const Database = () => {
  const { users, updateUserList } = useUserContext();

  const { data, isLoading, isError } = useQuery(
    "fetchUsers",
    async () => {
      const response = await axios.get("http://localhost:3000/user", {
        params: {
          role: "user",
        },
      });
      console.log(data);

      return response.data;
    },
    {
      onSuccess: (data) => {
        updateUserList(data);
      },
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching users</p>;
  }

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
