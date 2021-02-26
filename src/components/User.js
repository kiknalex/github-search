import React, { useState, useEffect } from "react";
import "../index.css";
import "../services/userSearch";
import userSearch from "../services/userSearch";
import { Link } from 'react-router-dom'

const User = ({ user, users, gridView, setUserLink }) => {
  const [userRepos, setUserRepos] = useState([]);
  useEffect(() => {
    userSearch
      .userRepos(user.repos_url)
      .then((data) => {
        if (data.length < 3) {
          for (let i = data.length; i <= 3; i++) {
            data.push({ name: "No Data" });
          }
        }
        setUserRepos(data.slice(0, 3));
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  const setLink = () => {
    setUserLink(user.login)
  }
  return (
    <div className={`user-container ${gridView ? "user-container-grid" : "user-container-list"}`}>
      <div className="user">
        <img src={user.avatar_url}></img>
        <Link to={`/${user.login}`} className="user-link">
        <h3 className="user-link" onClick={setLink}>{user.login}</h3>
        </Link>
        <h3 className="user-type">{user.type}</h3>
      </div>
      <div className="user-info">
        <h2>Repositories</h2>
        <ul>
          {
          userRepos.map((repo, i) => <li key={i}>{repo.name}</li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default User;
