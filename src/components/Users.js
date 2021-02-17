import "../index.css"
import React, { useState, useEffect } from 'react';
import User from './User'
import userSearch from '../services/userSearch';
import {styles} from './viewStyles'
const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userSearch
        .mostPopularUsers()
        .then(data => {
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
                user={user}
                key={user.id}
                />
            })
             : <h1>Loading...</h1>}
        </div>
    )
}

export default Users;