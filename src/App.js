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
  return (
    <Router>
    <div className="container">
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
      />
      </Route>
      <Route path="/userpage" exact component={UserPage} />
    </div>
    </Router>
  );
}

export default App;
