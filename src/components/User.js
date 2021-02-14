import React, { useState, useEffect } from 'react';
import "../index.css"
import "../services/userSearch"
import axios from 'axios'
import userSearch from '../services/userSearch';

const User = ({ user, users }) => {
    const [userRepos, setUserRepos] = useState([])
    useEffect(() => {
        userSearch
        .userRepos(user.repos_url)
        .then(data => {
            
            console.log(data);
            setUserRepos(data);
        })
        .catch(err => {
            console.log("Error:", err)
        })
    }, [users])
    return (
        <div className="user-container">
            <div className="user">
           <img src={user.avatar_url}></img>
           <h2>{user.login}</h2>
            </div>
            <div className="user-info">
                <h2>Repositories</h2>
                <ul>
                    <li key={userRepos[0]}>{userRepos[0]}</li>
                    <li key={userRepos[1]}>{userRepos[1]}</li>
                    <li key={userRepos[2]}>{userRepos[2]}</li>
                </ul>
            </div>
        </div>
    )
}

export default User;