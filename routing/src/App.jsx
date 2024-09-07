import './App.css'
import { Link } from 'react-router-dom';


function App() {

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page.</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  )
}

export default App
