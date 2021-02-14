import axios from 'axios'

const request = require('request');
const baseUrl = ""
const popularUsersUrl = "https://api.github.com/search/users?q=followers%3A%3E%3D1000&ref=searchresults&s=followers&type=Users"
const headers = {
    "Authorization" : `token ${process.env.REACT_APP_API_KEY}`,
    'User-Agent': 'request'
}
const mostPopularUsers = () => {
    const request = axios.get(popularUsersUrl);
    return request.then(response => response.data, {
        headers: headers
    })
}
const userRepos = (reposUrl) => {
    const request = axios.get(reposUrl);
    return request.then(response => response.data, {
        headers: headers
    })
}


export default ({ mostPopularUsers, userRepos })