import "../index.css"
import React, { useState, useEffect } from 'react';
import User from './User'
import userSearch from '../services/userSearch';
import ViewButton from './ViewButton'
const Users = ({ gridView, users, setUsers }) => {
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
        
           
        <div className={`users-listing ${gridView ? 'users-layout-grid' : 'users-layout-list'}`} >
            {users.length > 0 ? 
            users.map(user => {
                return <User
                user={user}
                key={user.id}
                gridView={gridView}
                />
            })
             : <h1>Loading...</h1>}
        
        </div>
    )
}

export default Users;