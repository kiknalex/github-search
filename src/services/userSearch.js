import axios from 'axios'

const baseUrl = ""
const popularUsersUrl = "https://api.github.com/search/users?q=followers%3A%3E%3D1000&ref=searchresults&s=followers&type=Users"
const headers = {
    "Authorization" : `token ${process.env.REACT_APP_API_KEY}`
}
const mostPopularUsers = () => {
    const request = axios.get(popularUsersUrl, {
        "headers": headers
    });
    return request.then(response => response.data)
}
const userRepos = (reposUrl) => {
    const request = axios.get(reposUrl, {
        "headers": headers
    });
    return request.then(response => response.data)
}


export default ({ mostPopularUsers, userRepos })