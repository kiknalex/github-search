import '../index.css'
import React, { useState } from 'react'
import userSearch from '../services/userSearch'
const Header = ({ setUsers }) => {

    const [username, setUsername] = useState("")
    const search = () => {
        userSearch
        .usernameSearch(username)
        .then(data => {
            setUsers(data.items)
        })
        .catch(error => {
            console.log("Error:", error)
        })
    }
    return (
        <header>
            <h2>Github User Search</h2>
            <a href="#">Home</a>
            <div className="search-container">
            <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}></input>
            <button onClick={search}><i className="fas fa-search"></i></button>
            </div>
        </header>
    )
}

export default Header;