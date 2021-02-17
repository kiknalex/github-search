import './index.css'
import Header from './components/Header'
import Users from './components/Users'
import ViewButton from './components/ViewButton'
function App() {
  return (
    <div className="container">
      <Header />
      <ViewButton />
      <Users />
    </div>
  );
}

export default App;
