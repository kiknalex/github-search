import React, { useEffect, useState } from 'react'
import "../index.css"
import { Link, useLocation } from 'react-router-dom'
import userSearch from '../services/userSearch'
const UserPage = () => {
    const [user, setUser] = useState([])
    const [repos, setRepos] = useState([])
    const [orgs, setOrgs] = useState([])
    const username = useLocation().pathname.substring(1);

    const getRepos = () => {
        userSearch
        .userRepos(`https://api.github.com/users/${username}/repos`)
        .then(data => {
            if (data.length < 3) {
                for (let i = data.length; i <= 3; i++) {
                  data.push({ name: "No Data" });
                }
              }
              setRepos(data.slice(0, 3));
        })
        .catch(error => {
            console.log("Error:", error)
        })
    }
    const getUser = () => {
        userSearch
        .userData(username)
        .then(data => {
            setUser(data)
        })
        .catch(error => {
            console.log("Error:", error)
        })
    }
    const getOrgs = () => {
        userSearch
        .userRepos(`https://api.github.com/users/${username}/orgs`)
        .then(data => {
            setOrgs(data)
            console.log(data)
        })
        .catch(error => {
            console.log("Error:", error)
        })
    }
    useEffect(() => {
        getUser()
        getRepos()
        getOrgs()
    },[])
    return (
        <div className="container">
            <Link to="/home" className="home-router-link">
            <h1 className="home-link">Home</h1>
            </Link>
            <div className="user-data-container">
                <div className="userpage-user-info">
                <img src={user.avatar_url}></img>
                <a href={`https://github.com/${user.login}`} target="_blank" className="username-page-link">{user.login}</a>
                <h2>{user.type}</h2>
                </div>
            <div className="user-description">
            <div className="section-name">Repositories</div>
                <div className="repos">
                    {
                        repos.length > 2 ?
                        <ul>
                            {
                            repos.map((repo, i) => <li key={i}>{`- ${repo.name}`}</li>)
                            }
                        </ul>
                        : <h3>No Repositories</h3>
                    }
                </div>
            <div className="section-name">Organizations</div>
                    <div className="repos organizations">
                        { orgs.length > 0 ?
                            orgs.map(org => {
                            return <div key={org.id} className="org">
                                <img src={org.avatar_url}></img>
                                <a href={`https://github.com/${org.login}`} target="_blank">{org.login}</a>
                            </div>
                            })
                            : <h3>No Organization</h3>
                        }
                    </div>
            </div>
            </div>
        </div>
    )
}

export default UserPage;