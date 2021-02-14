import "../index.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import User from './User'
import userSearch from '../services/userSearch';
const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userSearch
        .mostPopularUsers()
        .then(data => {
            console.log("tf:",process.env.REACT_APP_API_KEY)
            console.log(data.items)
            setUsers(data.items)
        })
        .catch(error => {
            console.log("Error:", error);
        })
    }, [])
    
    return (
        <div className="users-listing">
            {users.length > 0 ? 
            users.map(user => {
                return <User
                users={users}
                user={user}
                key={user.id}
                />
            })
             : <h1>Loading</h1>}
        </div>
    )
}

export default Users;