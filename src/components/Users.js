import "../index.css";
import React, { useState, useEffect } from "react";
import User from "./User";
import userSearch from "../services/userSearch";
import ViewButton from "./ViewButton";
const Users = ({ gridView, users, setUsers, setUserLink }) => {
  useEffect(() => {
    userSearch
      .mostPopularUsers()
      .then((data) => {
        setUsers(data.items);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div className={`users-listing ${gridView ? "users-layout-grid" : "users-layout-list"}`}>
      {users.length > 0 ? (
        users.map((user) => {
          return <User user={user} key={user.id} gridView={gridView} setUserLink={setUserLink} />
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Users;
