import './index.css'
import Header from './components/Header'
import Users from './components/Users'
import ViewButton from './components/ViewButton'
import UserPage from './components/UserPage'
import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  const [gridView, setGridView] = useState(true)
  const [users, setUsers] = useState([])
  const [userLink, setUserLink] = useState("")
  return (
    <Router>
    <div className="container">
      <Switch>
      <Route exact path="/home">
      <Header setUsers={setUsers} />
      <ViewButton 
      gridView={gridView} 
      setGridView={setGridView}
      />
      <Users 
      gridView={gridView}
      users={users}
      setUsers={setUsers}
      setUserLink={setUserLink}
      />
      </Route>
      <Route path={`/${userLink}`}>
        <UserPage username={userLink} />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
