import React, { useState, useEffect } from 'react';
import "../index.css"
import "../services/userSearch"
import userSearch from '../services/userSearch';

const User = ({ user, users }) => {
    const [userRepos, setUserRepos] = useState([])
    useEffect(() => {
        userSearch
        .userRepos(user.repos_url)
        .then(data => {
            setUserRepos(data);
        })
        .catch(err => {
            console.log("Error:", err)
        })
    }, [])
    return (
        <div className="user-container">
            <div className="user">
           <img src={user.avatar_url}></img>
           <a href={user.url}>{user.login}</a>
           <h3>{user.type}</h3>
            </div>
            <div className="user-info">
                <h2>Repositories</h2>
                {userRepos.length > 0 ?
                <ul>
                    <li key={userRepos[0].id}>{userRepos[0].name}</li>
                    <li key={userRepos[1].id}>{userRepos[1].name}</li>
                    <li key={userRepos[2].id}>{userRepos[2].name}</li>
                </ul>
                : <h3>Loading...</h3>
                }
            </div>
        </div>
    )
}

export default User;