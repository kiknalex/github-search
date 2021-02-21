import React, { useState, useEffect } from 'react';
import "../index.css"
import "../services/userSearch"
import userSearch from '../services/userSearch';

const User = ({ user, users, gridView }) => {
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
        <div className={`user-container ${gridView ? 'user-container-grid' : 'user-container-list'}`}>
            <div className="user">
           <img src={user.avatar_url}></img>
           <a href={user.url}>{user.login}</a>
           <h3>{user.type}</h3>
            </div>
            <div className="user-info">
                <h2>Repositories</h2>
                <ul>
                { userRepos.length > 0 ?
                userRepos.reduce((acc, repo) => {
                    
                    if(acc.length < 3 && userRepos.length > acc.length){
                    acc.push(<li key={repo.id}>{repo.name}</li>)
                    
                    } else if(acc.length < 4){
                        console.log("else11111:", acc)
                        acc.push(<h4>No Info</h4>)
                        console.log("else22222:", acc)
                    }
                    return acc;
                }, []) : <h3 style={{color: "gray"}}>No Info</h3>
                }
                </ul>
            </div>
        </div>
    )
}

export default User;