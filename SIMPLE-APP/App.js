import logo from './logo.svg';
import './App.css';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { useContext,useState } from 'react';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const {user}=useContext(AuthContext);
  const [page,setPage]=useState("login");

  if(user) return <Dashboard/>;

  return(
    <div>
      <button onClick={()=>setPage("login")}>Login</button>
      <button onClick={()=>setPage("register")}>Register</button>

      {page==="login"&& <Login/>}
      {page==="register"&& <Register/>}
    </div>
  )
}

export default App;