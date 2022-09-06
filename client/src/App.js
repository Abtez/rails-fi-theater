import './App.css';
import Home from './components/Home';
import {useState, useEffect} from 'react'
import {Route, Routes, useNavigate} from "react-router-dom"
import Login from "./components/Login"
import Nav from './components/Nav';

function App() {
  const [production, setProduction] = useState([])
  const [error, setError] = useState([])
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    fetch("/productions")
    .then(res => res.json())
    .then(data => setProduction(data))

    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, [])

  function addProduction(prod){
    fetch("/productions",{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(prod)
    })
    .then(res => {
      if (res.ok) {
        res.json().then(data => setProduction([...production, data]))
      }
      else{
        res.json().then(e => setError(Object.entries(e.error).flat()))
      }
    })
    
  }

  function deleteProduction(prod){
    fetch(`/productions/${prod.id}`,{
      method: "DELETE",
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => window.location.reload())
  }

  function addToSession(){
    fetch('/add_session')
    .then(res => res.json())
    .then(console.log)
  }

  function onLog(usr){
    setUser(user => usr)
    navigate("/")
  }

  function onLogout(){
    setUser(user => null)
    navigate("/")
    window.location.reload()
  }


  return (
    <div className="App">
    <Nav user={user} onLogout={onLogout}/>
        <Routes>

        <Route exact path='/' element={<Home user={user} deleteProduction={deleteProduction} 
          error={error} addProduction={addProduction} production={production}
          addToSession={addToSession} />} />

        <Route exact path='/login' element={<Login onLog={onLog} />} />

      </Routes>

    </div>
  );
}

export default App;
